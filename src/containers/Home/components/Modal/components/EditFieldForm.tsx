import { useContext } from "react"
import { DatasetsContext } from "@shared/context/DatasetsContext"
import { useLanguage } from "@shared/hooks"
import { DATASETS_ACTIONS } from "@containers/Home/constants"
import { ModalEditField } from "@containers/Home/interfaces/modal.interface"
import { ModalButtons, ModalTitle, FieldForm } from "../shared/components"
import { useFieldForm } from "../shared/hooks"

const EditFieldForm = ({
  handleCloseModal,
  modalProps,
}: {
  handleCloseModal: () => void
  modalProps: ModalEditField
}) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext)

  const { EDIT_FIELD_TEXT, SUBMIT_TEXT } = useLanguage({
    EDIT_FIELD_TEXT: { en: "Edit Field", es: "Editar Campo" },
    SUBMIT_TEXT: { en: "Edit", es: "Editar" },
  })

  const fieldActions = useFieldForm({
    id: modalProps.field.id,
    name: modalProps.field.name,
    dataType: modalProps.field.dataType,
    isArray: modalProps.field.isArray,
    isPosibleNull: modalProps.field.isPosibleNull,
  })

  const handleEditField = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.EDIT_FIELD,
      payload: {
        field: fieldActions.field,
        location: modalProps.location,
        datasetID: selectedDataset.id,
      },
    })

    handleCloseModal()
  }

  return (
    <div className='w-full flex flex-col'>
      <ModalTitle titleText={EDIT_FIELD_TEXT} handleCloseModal={handleCloseModal} />
      <FieldForm {...fieldActions} />
      <ModalButtons
        handleCancel={handleCloseModal}
        handleNext={handleEditField}
        nextText={SUBMIT_TEXT}
        type='edit'
      />
    </div>
  )
}

export default EditFieldForm
