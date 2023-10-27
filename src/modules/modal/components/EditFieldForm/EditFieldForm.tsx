import { useLanguage } from "@modules/app/modules/language/hooks"
import { ModalEditField } from "@modules/modal/interfaces/modal.interface"
import { FieldForm, ModalContainer } from "../../shared/components"
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
    <ModalContainer
      title={EDIT_FIELD_TEXT}
      handleNext={handleEditField}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="edit-field"
    >
      <FieldForm {...fieldActions} datasetId={datasetId} />
    </ModalContainer>
  )
}

export default EditFieldForm
