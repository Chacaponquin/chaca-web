import { FILE_TYPE } from "../constants"
import { Argument } from "@modules/schemas/interfaces/argument.interface"

export type SaveSchemaValue = null | SaveSchemaForm

export type SaveSchemaForm = {
  tags: Array<string>
  name: string
  description: string
}

export interface Config {
  file: ConfigFile
  saveSchema: SaveSchemaValue
}

export interface ConfigFile {
  fileType: FILE_TYPE
  arguments: Record<string, unknown>
}

export interface FileConfigOption {
  fileType: FILE_TYPE
  arguments: Argument[]
  title: string
}

export interface NoUserLimits {
  LIMIT_DATASETS: number
  LIMIT_DOCUMENTS: number
}
