import { ExportDatatype } from "../interfaces/dataset_field.interface"
import { IsArrayConfig } from "../interfaces/field_config.interface"

export interface ExportDataset {
  name: string
  limit: number
  fields: Array<ExportDatasetField<ExportDatatype>>
}

export type ExportDatasetField<T extends ExportDatatype> = {
  name: string
  dataType: T
  isPossibleNull: number
  isArray: IsArrayConfig
  isKey: boolean
}
