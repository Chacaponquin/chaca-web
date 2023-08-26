import { ModalAddFieldProps } from "@modules/modal/interfaces/modal.interface"
import { ModalTitle, ModalButtons, FieldForm } from "../../shared/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useAddFieldForm } from "./hooks"

const AddFieldForm = ({ modalProps }: { modalProps: ModalAddFieldProps }) => {
  const { NEW_FIELD_TEXT, SUBMIT_TEXT } = useLanguage({
    NEW_FIELD_TEXT: { en: "New Field", es: "Nuevo Campo" },
    SUBMIT_TEXT: { en: "Add Field", es: "Añadir Campo" },
  })

  const { handleAddField, fieldActions } = useAddFieldForm({
    parentFieldID: modalProps.parentFieldID,
    datasetId: modalProps.datasetId,
  })

  return (
    <div className="flex flex-col w-full">
      <ModalTitle titleText={NEW_FIELD_TEXT} />
      <FieldForm {...fieldActions} />
      <ModalButtons type="edit" nextText={SUBMIT_TEXT} handleNext={handleAddField} />
    </div>
  )
}

export default AddFieldForm
