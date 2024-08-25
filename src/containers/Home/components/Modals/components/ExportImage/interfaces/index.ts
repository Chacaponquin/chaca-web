import { ImageFormats } from "@modules/config/domain/core"

export interface Form {
  name: string
  format: FormatOptions
}

export interface FormatOptions {
  name: string
  format: ImageFormats
}
