import { ExportDatatype } from "../interfaces/dataset_field.interface"
import { IsArrayConfig } from "../interfaces/field_config.interface"

export type ExportDatasetField<T extends ExportDatatype> = {
  name: string
  dataType: T
  isPossibleNull: number
  isArray: IsArrayConfig
  isKey: boolean
}
