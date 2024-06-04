import { useDatasets } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { useModal } from "@modules/modal/hooks"
import { Field } from "@modules/datasets/domain/tree"
import { useToast } from "@modules/app/modules/toast/hooks"

interface Props {
  field: Field
  parentfieldId: string
  datasetId: string
}

export default function useEditFieldForm({ field, parentfieldId, datasetId }: Props) {
  const { handleCloseModal } = useModal()
  const { handleUpdateField } = useDatasets()
  const { toastChacaError } = useToast()

  const fieldActions = useFieldForm({
    field: {
      id: field.id,
      name: field.name,
      isArray: field.isArray,
      isPossibleNull: field.isPossibleNull,
      dataType: field.dataType,
      isKey: field.isKey,
    },
    datasetId: datasetId,
  })

  function handleEditField() {
    handleUpdateField({
      field: { ...fieldActions.field, name: fieldActions.field.name.trim() },
      parentfieldId: parentfieldId,
      datasetId: datasetId,
      error: toastChacaError,
      success: handleCloseModal,
    })
  }

  return { handleEditField, fieldActions, datasetId }
}
