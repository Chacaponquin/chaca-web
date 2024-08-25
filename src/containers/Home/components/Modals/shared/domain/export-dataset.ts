import { FileConfigOption } from "@modules/config/domain/core"

export interface ExportDatasetForm {
  file: ConfigFile
}

export interface ConfigFile {
  name: string
  type: FileConfigOption
  arguments: Record<string, unknown>
}
