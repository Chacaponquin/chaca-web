import { Argument } from "@modules/schemas/interfaces/argument"

export type SaveSchemaValue = null | SaveSchemaForm

export type SaveSchemaForm = {
  tags: string[]
  name: string
  description: string
}

export interface Config {
  file: ConfigFile
  saveSchema: SaveSchemaValue
}

export interface ConfigFile {
  name: string
  type: string
  arguments: Record<string, unknown>
}

export interface FileConfigOption {
  fileType: string
  arguments: Argument[]
  title: string
  id: string
}

export interface NoUserLimits {
  LIMIT_DATASETS: number
  LIMIT_DOCUMENTS: number
}
