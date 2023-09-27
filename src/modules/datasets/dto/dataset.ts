import { FieldDataType } from "../interfaces/dataset_field.interface"
import { IsArrayConfig } from "../interfaces/field_config.interface"

export interface ExportDataset {
  name: string
  limit: number
  fields: ExportDatasetField[]
}

export type ExportDatasetField<T = FieldDataType> = {
  name: string
  dataType: T
  isPossibleNull: number
  isArray: IsArrayConfig
  isKey: boolean
}
