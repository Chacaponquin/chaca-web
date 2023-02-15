import { DocsConfigHeader, DocsInput, DocsMenu, NoSelectSectionMessage } from "./components"
import { useState, useContext } from "react"
import { ISubSectionForm } from "./interfaces/subSectionForm.interface"
import { useDelete, useLazyQuery, usePost, useQuery } from "@modules/shared/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import { ApiDocSection } from "@modules/admin/api/interfaces/apiDocSection.interface"
import { ModalContext } from "@modules/modal/context"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { toast } from "react-toastify"
import { CreateApiDocDTO } from "@modules/admin/api/dto/apiDoc.dto"
import { FetchError } from "@modules/shared/errors"
import { LazyQueryProps } from "@modules/shared/hooks/useLazyQuery"
import { CreateApiDocSubSectionDTO } from "@modules/admin/api/dto/apiDocSubSection.dto"

export default function EditDocumentation() {
  const { handleOpenModal } = useContext(ModalContext)

  const [subSectionForm, setSubSectionForm] = useState<null | ISubSectionForm>(null)

  const queryConfig: LazyQueryProps<Array<ApiDocSection>> = {
    url: API_ROUTES.ADMIN.DOCS.GET_DOCS,
    onCompleted: (sections: Array<ApiDocSection>) => {
      setApiDocSections(sections)
    },
    onError: () => {
      throw new FetchError()
    },
  }

  const [apiDocSections, setApiDocSections] = useState<Array<ApiDocSection>>([])

  const { loading: fetchLoading } = useQuery<Array<ApiDocSection>>(queryConfig)

  const [lazySectionsQuery, { loading: lazyQueryLoading }] = useLazyQuery<Array<ApiDocSection>>()

  const [createApiDocSection, { loading: createApiDocLoading }] = usePost<void, CreateApiDocDTO>({
    url: API_ROUTES.ADMIN.DOCS.CREATE_API_DOC_SECTION,
    onError: () => {
      toast.error("Hubo un error en la creacion")
    },
    onCompleted: () => {
      lazySectionsQuery(queryConfig)
    },
  })

  const [deleteApiDocSubSection, { loading: deleteApiDocSubSectionLoading }] = useDelete()

  const [createApiDocSubSection, { loading: createApiDocSubSectionLoading }] = usePost<
    string,
    CreateApiDocSubSectionDTO
  >({
    url: API_ROUTES.ADMIN.DOCS.CREATE_API_DOC_SUB_SECTION,
    onCompleted: (sectionID) => {
      console.log(sectionID)
      lazySectionsQuery(queryConfig)
    },
    onError: () => {
      throw new FetchError()
    },
  })

  const handleChangeTitle = (value: string) => {
    if (subSectionForm) setSubSectionForm({ ...subSectionForm, title: value })
  }

  const handleChangeLanguage = (value: string) => {
    if (subSectionForm) setSubSectionForm({ ...subSectionForm, language: value })
  }

  const handleChangeContent = (value: string) => {
    if (subSectionForm) setSubSectionForm({ ...subSectionForm, content: value })
  }

  const handleAddApiDocSubSection = (parentID: string) => {
    createApiDocSubSection({ body: { parentSectionID: parentID } })
    setSubSectionForm({ title: "", content: "", language: "en" })
  }

  const handleAddNewApiSection = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADMIN_CREATE_API_DOC_SECTION,
      handleAddSection: (title: string, language: string) => {
        createApiDocSection({ body: { language, sectionTitle: title } })
      },
    })
  }

  const handleDeleteApiDocSubSection = (subSectionID: string, subSectionName: string) => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADMIN_DELETE_API_DOC_SUB_SECTION,
      subSectionName,
      handleDeleteApiDocSubSection: () => {
        deleteApiDocSubSection({
          url: `${API_ROUTES.ADMIN.DOCS.DELETE_API_DOC_SUB_SECTION}/${subSectionID}`,
          onCompleted: () => {
            lazySectionsQuery(queryConfig)
          },
          onError: () => {
            toast.error("Hubo un error")
          },
        })
      },
    })
  }

  return (
    <div className='w-full h-screen flex'>
      <DocsMenu
        sections={apiDocSections}
        handleAddNewApiSection={handleAddNewApiSection}
        fetchLoading={
          fetchLoading ||
          lazyQueryLoading ||
          createApiDocLoading ||
          createApiDocSubSectionLoading ||
          deleteApiDocSubSectionLoading
        }
        handleAddApiDocSubSection={handleAddApiDocSubSection}
        handleDeleteApiDocSubSection={handleDeleteApiDocSubSection}
      />

      {subSectionForm ? (
        <div className='h-full w-full'>
          <DocsConfigHeader
            handleChangeLanguage={handleChangeLanguage}
            handleChangeTitle={handleChangeTitle}
            language={subSectionForm.language}
            title={subSectionForm.title}
          />
          <DocsInput content={subSectionForm.content} handleChangeContent={handleChangeContent} />
        </div>
      ) : (
        <NoSelectSectionMessage />
      )}
    </div>
  )
}
