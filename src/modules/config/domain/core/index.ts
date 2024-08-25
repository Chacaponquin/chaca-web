import { Argument } from "@modules/schemas/domain/argument"

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

export type ImageFormats = "svg" | "png"
