import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { datasetServices } from "@modules/datasets/services"
import { Argument } from "@modules/schemas/interfaces/schema.interface"

export function useFieldArgument(field: DatasetField<SingleValueDataType>, arg: Argument) {
  const { updateFieldSchemaArgumetns } = datasetServices()

  const handleChangeArgumentValue = (value: unknown) => {
    updateFieldSchemaArgumetns(field, arg.argument, value)
  }

  return { handleChangeArgumentValue }
}
