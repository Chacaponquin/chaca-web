import { ImageFormats } from "@modules/config/interfaces"

export interface Form {
  name: string
  format: ImageFormats
}

export interface FormatOptions {
  name: string
  format: ImageFormats
}
