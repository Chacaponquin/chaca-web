import { IsArrayConfig, PossibleNullConfig } from "../interfaces/field-config"
import { ExportDatatypeDTO } from "./field"

export type ExportDatasetFieldDTO<T extends ExportDatatypeDTO> = {
  name: string
  dataType: T
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: boolean
}

export interface ExportDatasetDTO {
  name: string
  limit: number
  fields: ExportDatasetFieldDTO<ExportDatatypeDTO>[]
}

export interface RespExportDatasetDTO {
  id: string
  filename: string
}
