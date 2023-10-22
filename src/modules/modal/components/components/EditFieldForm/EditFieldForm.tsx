import { useLanguage } from "@modules/app/modules/language/hooks"
import { ModalEditField } from "@modules/modal/interfaces/modal.interface"
import { ModalButtons, ModalTitle, FieldForm } from "../../shared/components"
import { useEditFieldForm } from "./hooks"

const EditFieldForm = ({ modalProps }: { modalProps: ModalEditField }) => {
  const { EDIT_FIELD_TEXT, SUBMIT_TEXT } = useLanguage({
    EDIT_FIELD_TEXT: { en: "Edit Field", es: "Editar Campo" },
    SUBMIT_TEXT: { en: "Edit", es: "Editar" },
  })

  const { handleEditField, fieldActions, datasetId } = useEditFieldForm({
    field: modalProps.field,
    parentfieldId: modalProps.parentfieldId,
    datasetId: modalProps.datasetId,
  })

  return (
    <div className="w-full flex flex-col">
      <ModalTitle titleText={EDIT_FIELD_TEXT} />
      <FieldForm {...fieldActions} datasetId={datasetId} />
      <ModalButtons handleNext={handleEditField} nextText={SUBMIT_TEXT} type="edit" />
    </div>
  )
}

export default EditFieldForm
