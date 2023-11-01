import { ExportDatatype } from "../interfaces/dataset_field"
import { IsArrayConfig, PossibleNullConfig } from "../interfaces/field_config"

export type ExportDatasetField<T extends ExportDatatype> = {
  name: string
  dataType: T
  isPossibleNull: number
  isArray: IsArrayConfig
  isKey: boolean
}

export interface ExportDatasetDTO {
  name: string
  limit: number
  fields: Array<ExportFieldDTO>
}

export interface ExportFieldDTO {
  name: string
  dataType: ExportDatatype
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: boolean
}
