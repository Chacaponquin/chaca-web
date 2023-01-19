import { FILE_TYPE } from "../constants"
import { Argument } from "@modules/schemas/interfaces/argument.interface"

export type SaveSchemaValue = null | SaveSchemaForm

export type SaveSchemaForm = {
  tags: Array<string>
  name: string
  description: string
}

export interface ConfigSchema {
  file: ConfigFile
  saveSchema: SaveSchemaValue
}

export interface ConfigFile {
  fileType: FILE_TYPE
  arguments: { [path: string]: unknown }
}

export interface FileConfigOption {
  fileType: FILE_TYPE
  arguments: Argument[]
}

export interface NoUserLimits {
  LIMIT_DATASETS: number
  LIMIT_DOCUMENTS: number
}
