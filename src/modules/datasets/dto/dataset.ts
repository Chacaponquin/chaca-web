import { ExportFieldDataType } from "../interfaces/dataset_field.interface"
import { IsArrayConfig } from "../interfaces/field_config.interface"

export interface ExportDataset {
  name: string
  limit: number
  fields: ExportDatasetField[]
}

export type ExportDatasetField = {
  name: string
  dataType: ExportFieldDataType
  isPossibleNull: number
  isArray: IsArrayConfig
  isKey: boolean
}
