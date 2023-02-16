import { DocsConfigHeader, DocsInput, DocsMenu, NoSelectSectionMessage } from "./components"
import { useState, useContext } from "react"
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
import { LanguageConfig } from "@modules/shared/interfaces/language.interface"
import { ApiDocSubSection } from "@modules/admin/api/interfaces/apiDocSubSection.interface"

export default function EditDocumentation() {
  const { handleOpenModal } = useContext(ModalContext)

  const [subSectionForm, setSubSectionForm] = useState<null | ApiDocSubSection>(null)
  const [apiDocSections, setApiDocSections] = useState<Array<ApiDocSection>>([])
  const [actualLanguage, setActualLanguage] = useState<keyof LanguageConfig>("en")

  const queryConfig: LazyQueryProps<Array<ApiDocSection>> = {
    url: API_ROUTES.ADMIN.DOCS.GET_DOCS,
    onCompleted: (sections: Array<ApiDocSection>) => {
      setApiDocSections(sections)
    },
    onError: () => {
      throw new FetchError()
    },
  }

  const { loading: fetchLoading } = useQuery<Array<ApiDocSection>>(queryConfig)

  const [fetchSelectSubSection] = useLazyQuery<ApiDocSubSection>()

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

  const [uploadImage, { loading: uploadImageLoading }] = usePost<string, FormData>({
    url: API_ROUTES.ADMIN.MEDIA.UPLOAD_IMAGE,
    onCompleted: (url) => {
      console.log(url)

      if (subSectionForm) {
        setSubSectionForm({
          ...subSectionForm,
          content: {
            ...subSectionForm.content,
            [actualLanguage]: subSectionForm.content[actualLanguage] + `![Welcome](${url})`,
          },
        })
      }
    },
    onError: () => {
      toast.error("Hubo un error al subir la imagen")
    },
  })

  const [deleteApiDocSubSection, { loading: deleteApiDocSubSectionLoading }] = useDelete()

  const [createApiDocSubSection, { loading: createApiDocSubSectionLoading }] = usePost<
    string,
    CreateApiDocSubSectionDTO
  >({
    url: API_ROUTES.ADMIN.DOCS.CREATE_API_DOC_SUB_SECTION,
    onCompleted: (sectionID) => {
      lazySectionsQuery(queryConfig)
      handleFetchSelectedSubSection(sectionID)
    },
    onError: () => {
      throw new FetchError()
    },
  })

  const handleFetchSelectedSubSection = (subSectionID: string) => {
    fetchSelectSubSection({
      url: `${API_ROUTES.ADMIN.DOCS.GET_API_DOC_SUB_SECTION}/${subSectionID}`,
      onCompleted: (subSection) => {
        setSubSectionForm(subSection)
      },
      onError: () => {
        toast.error("Hubo un error en la búsqueda")
      },
    })
  }

  const handleChangeTitle = (value: string) => {
    if (subSectionForm) {
      setSubSectionForm({
        ...subSectionForm,
        title: { ...subSectionForm.title, [actualLanguage]: value },
      })
    }
  }

  const handleChangeLanguage = (value: string) => {
    setActualLanguage(value as keyof LanguageConfig)
  }

  const handleChangeContent = (value: string) => {
    if (subSectionForm) {
      setSubSectionForm({
        ...subSectionForm,
        content: { ...subSectionForm.content, [actualLanguage]: value },
      })
    }
  }

  const handleAddApiDocSubSection = (parentID: string) => {
    createApiDocSubSection({ body: { parentSectionID: parentID } })
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
            setSubSectionForm(null)
          },
          onError: () => {
            toast.error("Hubo un error")
          },
        })
      },
    })
  }

  const handleUploadImage = (file: File) => {
    const data = new FormData()
    data.append("file", file)

    uploadImage({ body: data })
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
        handleFetchSelectedSubSection={handleFetchSelectedSubSection}
        selectSubSectionID={subSectionForm ? subSectionForm._id : ""}
      />

      {subSectionForm ? (
        <div className='h-full w-full'>
          <DocsConfigHeader
            handleChangeLanguage={handleChangeLanguage}
            handleChangeTitle={handleChangeTitle}
            language={actualLanguage}
            title={subSectionForm.title[actualLanguage]}
          />
          <DocsInput
            content={subSectionForm.content[actualLanguage]}
            handleChangeContent={handleChangeContent}
            handleUploadImage={handleUploadImage}
            loading={uploadImageLoading}
          />
        </div>
      ) : (
        <NoSelectSectionMessage />
      )}
    </div>
  )
}
