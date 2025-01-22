import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"
import { Field } from "@modules/dataset/domain/core"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useFieldForm } from "../../../shared/hooks"

interface Props {
  field: Field
  parentfieldId: string
  schemaId: string
}

export default function useEditFieldForm({ field, parentfieldId, schemaId }: Props) {
  const { handleCloseModal } = useModal()
  const { handleUpdateField } = useDataset()
  const { toastChacaError } = useToast()

  const fieldActions = useFieldForm({
    field: {
      id: field.id,
      name: field.name,
      isArray: field.isArray,
      possibleNull: field.possibleNull,
      datatype: field.datatype,
      isKey: field.isKey,
    },
    schemaId: schemaId,
  })

  function handleEditField() {
    handleUpdateField({
      field: { ...fieldActions.field, name: fieldActions.field.name.trim() },
      parentfieldId: parentfieldId,
      schemaId: schemaId,
      error: toastChacaError,
      success: handleCloseModal,
    })
  }

  return { handleEditField, fieldActions, schemaId }
}
