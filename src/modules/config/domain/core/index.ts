import { Argument } from "@modules/modules/domain/core/argument"

export interface FileConfigOption {
  type: string
  arguments: Argument[]
  title: string
  id: string
}

export type ImageFormats = "svg" | "png"
