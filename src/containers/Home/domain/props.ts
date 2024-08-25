import { ImageFormats } from "@modules/config/domain/core"

export interface ExportImageProps {
  filename: string
  format: ImageFormats
}
