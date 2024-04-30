import { useDatasets } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { useFormErrors, useModal } from "@modules/modal/hooks"
import { ExportDatatypeDTO } from "@modules/datasets/dto/field"
import { Field } from "@modules/datasets/domain/tree"

interface Props {
  field: Field<ExportDatatypeDTO>
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
      dataType: field.dataType(),
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
