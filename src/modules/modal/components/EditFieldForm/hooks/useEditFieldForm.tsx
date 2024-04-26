import { DatasetField } from "@modules/datasets/interfaces/datasets"
import { useDatasets } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { useFormErrors, useModal } from "@modules/modal/hooks"

interface Props {
  field: DatasetField
  parentfieldId: string
  datasetId: string
}

export default function useEditFieldForm({ field, parentfieldId, datasetId }: Props) {
  const { handleCloseModal } = useModal()
  const { handleUpdateField } = useDatasets()
  const { handleError } = useFormErrors()

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
      error: handleError,
      success: handleCloseModal,
    })
  }

  return { handleEditField, fieldActions, datasetId }
}
