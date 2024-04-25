import { useDatasets, useDatatypes } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { v4 as uuid } from "uuid"
import { useFormErrors, useModal } from "@modules/modal/hooks"
import { FieldName } from "@modules/datasets/value-object"

interface Props {
  parentfieldId: string
  datasetId: string
}

export default function useAddFieldForm({ datasetId, parentfieldId }: Props) {
  const { handleError } = useFormErrors()

  const fieldId = uuid()

  const { DEFAULT_SCHEMA_VALUE_DATA_TYPE } = useDatatypes({
    datasetId: datasetId,
    fieldId: fieldId,
  })

  const { handleCloseModal } = useModal()
  const { handleAddField: handleAddFieldService } = useDatasets()

  const fieldActions = useFieldForm({
    field: {
      id: fieldId,
      name: "",
      isArray: null,
      isPossibleNull: 0,
      dataType: DEFAULT_SCHEMA_VALUE_DATA_TYPE,
      isKey: false,
    },
    datasetId: datasetId,
  })

  function handleAddField() {
    try {
      handleAddFieldService({
        datasetId: datasetId,
        field: { ...fieldActions.field, name: new FieldName(fieldActions.field.name) },
        parentfieldId: parentfieldId,
      })

      handleCloseModal()
    } catch (error) {
      handleError(error as Error)
    }
  }

  return { handleAddField, fieldActions, datasetId }
}
