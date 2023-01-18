import { FILE_TYPE } from "../constant/FILE_TYPE"
import { Argument } from "./options.interface"

export type SaveSchemaValue = null | {
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
