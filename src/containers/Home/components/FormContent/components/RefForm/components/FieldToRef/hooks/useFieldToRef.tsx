import { DatasetField, RefDataType } from "@modules/datasets/interfaces/datasets.interface"
import { datasetServices } from "@modules/datasets/services"

export function useFieldToRef(
  selectField: DatasetField<RefDataType>,
  location: Array<string>,
  field: DatasetField,
) {
  const { updateRefField } = datasetServices()

  const handleRefField = () => {
    updateRefField(selectField.id, location, field.id)
  }

  return { handleRefField }
}
