import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { datasetServices } from "@modules/datasets/services"

export function useSchemaSelect(field: DatasetField<SingleValueDataType>) {
  const { selectFieldSchema } = datasetServices()

  const handleSelectSchema = (parent: string) => {
    selectFieldSchema(parent, field.id)
  }

  return { handleSelectSchema }
}
