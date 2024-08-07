import { useTranslation } from "@modules/app/modules/language/hooks"
import { useEditFieldForm } from "./hooks"
import { Field } from "@modules/datasets/domain/dataset"
import { Modal } from "@modules/modal/components"
import { FieldForm } from "../../shared/components"

interface Props {
  field: Field
  parentfieldId: string
  datasetId: string
}

export default function EditField({ datasetId, field, parentfieldId }: Props) {
  const { EDIT_FIELD_TEXT, SUBMIT_TEXT } = useTranslation({
    EDIT_FIELD_TEXT: { en: "Edit Field", es: "Editar Campo" },
    SUBMIT_TEXT: { en: "Edit", es: "Editar" },
  })

  const { handleEditField, fieldActions } = useEditFieldForm({
    field: field,
    parentfieldId: parentfieldId,
    datasetId: datasetId,
  })

  return (
    <Modal
      title={EDIT_FIELD_TEXT}
      handleNext={handleEditField}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="edit-field"
    >
      <FieldForm {...fieldActions} datasetId={datasetId} />
    </Modal>
  )
}
