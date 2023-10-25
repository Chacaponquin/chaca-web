import { ExportDatatype } from "../interfaces/dataset_field.interface"
import { IsArrayConfig, PossibleNullConfig } from "../interfaces/field_config.interface"

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
