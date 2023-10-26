import { Argument } from "@modules/schemas/interfaces/argument"

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
  fileType: string
  arguments: Record<string, unknown>
}

export interface FileConfigOption {
  fileType: string
  arguments: Array<Argument>
  title: string
  id: string
}

export interface NoUserLimits {
  LIMIT_DATASETS: number
  LIMIT_DOCUMENTS: number
}
