import { ExportDatasetFieldDTO } from "./field"

export interface ExportSchemaDTO {
  name: string
  limit: number
  fields: ExportDatasetFieldDTO[]
}
