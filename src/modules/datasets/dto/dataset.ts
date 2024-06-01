import { FieldDatatype } from "../interfaces/dataset-field"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "../interfaces/field-config"
import { ExportDatatypeDTO } from "./field"

export type ExportDatasetFieldDTO = {
  name: string
  dataType: ExportDatatypeDTO
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
}

export type SaveFieldDTO = {
  name: string
  dataType: FieldDatatype
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
  id: string
}

export interface ExportDatasetDTO {
  name: string
  limit: number
  fields: ExportDatasetFieldDTO[]
}

export interface RespExportDatasetDTO {
  id: string
  filename: string
}
