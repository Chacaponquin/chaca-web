import { useTranslation } from "@modules/app/modules/language/hooks"
import { useEditFieldForm } from "./hooks"
import { Modal } from "@modules/modal/components"
import { FieldForm } from "../../shared/components"
import { Field } from "@modules/dataset/domain/core/field"

interface Props {
  field: Field
  parentfieldId: string
  schemaId: string
}

export default function EditField({ schemaId, field, parentfieldId }: Props) {
  const { EDIT_FIELD_TEXT, SUBMIT_TEXT } = useTranslation({
    EDIT_FIELD_TEXT: { en: "Edit Field", es: "Editar Campo" },
    SUBMIT_TEXT: { en: "Edit", es: "Editar" },
  })

  const { handleEditField, fieldActions } = useEditFieldForm({
    field: field,
    parentfieldId: parentfieldId,
    schemaId: schemaId,
  })

  return (
    <Modal
      title={EDIT_FIELD_TEXT}
      handleNext={handleEditField}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="edit-field"
    >
      <FieldForm {...fieldActions} schemaId={schemaId} />
    </Modal>
  )
}
