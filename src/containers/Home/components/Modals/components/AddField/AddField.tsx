import { useTranslation } from "@modules/app/modules/language/hooks"
import { useAddFieldForm } from "./hooks"
import { Modal } from "@modules/modal/components"
import { FieldForm } from "../../shared/components"

interface Props {
  parentfieldId: string
  schemaId: string
}

export default function AddField({ schemaId, parentfieldId }: Props) {
  const { NEW_FIELD_TEXT, SUBMIT_TEXT } = useTranslation({
    NEW_FIELD_TEXT: { en: "New Field", es: "Nuevo Campo" },
    SUBMIT_TEXT: { en: "Add Field", es: "Añadir Campo" },
  })

  const { handleAddField, fieldActions } = useAddFieldForm({
    parentfieldId: parentfieldId,
    schemaId: schemaId,
  })

  return (
    <Modal
      title={NEW_FIELD_TEXT}
      type="edit"
      nextText={SUBMIT_TEXT}
      handleNext={handleAddField}
      name="add-field"
    >
      <FieldForm {...fieldActions} schemaId={schemaId} />
    </Modal>
  )
}
