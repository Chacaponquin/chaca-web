import { ModalContext } from "@modules/modal/context"
import { ModalAdminDeleteApiDocSubSection } from "@modules/modal/interfaces/modal.interface"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import { useContext } from "react"
import { DeleteForm, ModalButtons, ModalTitle } from "../../shared/components"

export default function DeleteApiDocSubSection({
  handleDeleteApiDocSubSection,
  subSectionName,
}: ModalAdminDeleteApiDocSubSection) {
  const { handleCloseModal } = useContext(ModalContext)

  const { DELETE_TITLE, DELETE_MESSAGE } = useLanguage({
    DELETE_TITLE: { en: "Delete Sub Section", es: "Borrar Sub Sección" },
    DELETE_MESSAGE: {
      en: "Are you sure you want to delete the sub-section",
      es: "Seguro que quieres eliminar la sub-sección",
    },
  })

  const handleDelete = () => {
    handleDeleteApiDocSubSection()
    handleCloseModal()
  }

  return (
    <div className='w-full flex flex-col'>
      <ModalTitle titleText={DELETE_TITLE} />
      <DeleteForm message={DELETE_MESSAGE} elementName={subSectionName} />
      <ModalButtons handleNext={handleDelete} nextText='Delete' type='delete' />
    </div>
  )
}
