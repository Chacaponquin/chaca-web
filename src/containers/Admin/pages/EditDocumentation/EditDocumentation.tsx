import { DocsConfigHeader, DocsInput, DocsMenu } from "./components"
import { useState, useContext } from "react"
import { ISubSectionForm } from "./interfaces/subSectionForm.interface"
import { usePost, useQuery } from "@modules/shared/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import { ApiDocSection } from "@modules/admin/api/interfaces/apiDocSection.interface"
import { ModalContext } from "@modules/modal/context"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { toast } from "react-toastify"
import { CreateApiDocDTO } from "@modules/admin/api/dto/apiDoc.dto"
import { FetchError } from "@modules/shared/errors"

export default function EditDocumentation() {
  const { handleOpenModal } = useContext(ModalContext)

  const [subSectionForm, setSubSectionForm] = useState<ISubSectionForm>({
    title: "",
    language: "en",
    content: "",
  })

  const [apiDocSections, setApiDocSections] = useState<Array<ApiDocSection>>([])

  useQuery<Array<ApiDocSection>>({
    url: API_ROUTES.ADMIN.DOCS.GET_DOCS,
    onCompleted: (sections) => {
      setApiDocSections(sections)
    },
    onError: () => {
      throw new FetchError()
    },
  })

  const [createApiDocSection, { loading: createApiDocLoading }] = usePost<void, CreateApiDocDTO>({
    url: API_ROUTES.ADMIN.DOCS.CREATE_API_DOC_SECTION,
    onError: () => {
      toast.error("Hubo un error en la creacion")
    },
  })

  const handleChangeTitle = (value: string) => {
    setSubSectionForm({ ...subSectionForm, title: value })
  }

  const handleChangeLanguage = (value: string) => {
    setSubSectionForm({ ...subSectionForm, language: value })
  }

  const handleChangeContent = (value: string) => {
    setSubSectionForm({ ...subSectionForm, content: value })
  }

  const handleAddNewApiSection = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADMIN_CREATE_API_DOC_SECTION,
      handleAddSection: () => {
        createApiDocSection()
      },
    })
  }

  return (
    <div className='w-full h-screen flex'>
      <DocsMenu sections={apiDocSections} handleAddNewApiSection={handleAddNewApiSection} />

      <div className='h-full w-full'>
        <DocsConfigHeader
          handleChangeLanguage={handleChangeLanguage}
          handleChangeTitle={handleChangeTitle}
          language={subSectionForm.language}
          title={subSectionForm.title}
        />
        <DocsInput content={subSectionForm.content} handleChangeContent={handleChangeContent} />
      </div>
    </div>
  )
}
