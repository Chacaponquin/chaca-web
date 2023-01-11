import { useContext } from "react"
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext"
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext"
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES"
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES"
import { ModalAddFieldProps } from "../../../interfaces/modal.interface"
import ModalTitle from "../shared/components/ModalTitle"
import ModalButtons from "../shared/components/ModalButtons"
import FieldForm from "../shared/components/FieldForm"
import { useFieldForm } from "../shared/hooks/useFieldForm"
import { v4 as uuid } from "uuid"
import { toast } from "react-toastify"
import { useLanguage } from "../../../../../shared/hooks"

const AddFieldForm = ({
  modalProps,
  handleCloseModal,
}: {
  modalProps: ModalAddFieldProps
  handleCloseModal: () => void
}) => {
  const { datasetDispatch, handleDeleteSelectField, selectedDataset } = useContext(DatasetsContext)
  const { schemas } = useContext(AppConfigContext)
  const { NEW_FIELD_TEXT, SUBMIT_TEXT } = useLanguage({
    NEW_FIELD_TEXT: { en: "New Field", es: "Nuevo Campo" },
    SUBMIT_TEXT: { en: "Add Field", es: "Añadir Campo" },
  })

  const fieldActions = useFieldForm({
    id: uuid(),
    name: "",
    dataType: {
      fieldType: {
        args: {},
        parent: schemas[0].parent,
        type: schemas[0].options[1].name,
      },
      type: DATA_TYPES.SINGLE_VALUE,
    },
    isArray: null,
    isPosibleNull: 0,
  })

  const handleAddField = () => {
    if (fieldActions.field.name) {
      // crear el field
      datasetDispatch({
        type: DATASETS_ACTIONS.ADD_NEW_FIELD,
        payload: {
          fieldName: fieldActions.field.name,
          fieldInfo: fieldActions.field,
          parentFieldID: modalProps.parentFieldID,
          datasetID: selectedDataset.id,
        },
      })

      // quitar el selected field (ponerlo en null)
      handleDeleteSelectField()

      // close modal
      handleCloseModal()
    } else {
      toast.error("The field name can not be an empty string")
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle titleText={NEW_FIELD_TEXT} handleCloseModal={handleCloseModal} />

      <FieldForm {...fieldActions} />

      <ModalButtons
        type='edit'
        nextText={SUBMIT_TEXT}
        handleCancel={handleCloseModal}
        handleNext={handleAddField}
      />
    </div>
  )
}

export default AddFieldForm
