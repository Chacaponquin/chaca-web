import { useDatasets, useDatatypes } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { v4 as uuid } from "uuid"
import { useModal } from "@modules/modal/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"

interface Props {
  parentfieldId: string
  datasetId: string
}

export default function useAddFieldForm({ datasetId, parentfieldId }: Props) {
  const fieldId = uuid()

  const { toastChacaError } = useToast()

  const { DEFAULT_SCHEMA_VALUE_DATA_TYPE } = useDatatypes({
    datasetId: datasetId,
    fieldId: fieldId,
  })

  const { handleCloseModal } = useModal()
  const { handleAddField: handleAddFieldHook } = useDatasets()

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
    const field = fieldActions.field

    handleAddFieldHook({
      datasetId: datasetId,
      field: {
        name: fieldActions.field.name.trim(),
        dataType: field.dataType,
        id: field.id,
        isArray: field.isArray,
        isKey: field.isKey,
        isPossibleNull: field.isPossibleNull,
      },
      parentfieldId: parentfieldId,
      success() {
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { handleAddField, fieldActions, datasetId }
}
