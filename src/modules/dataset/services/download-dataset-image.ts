import { ImageFormats } from "@modules/config/domain/core"

interface Props {
  filename: string
  image: string
  format: ImageFormats
}

export function downloadDatasetsImage({ filename, image, format }: Props) {
  const a = document.createElement("a")

  a.setAttribute("download", `${filename}.${format}`)
  a.setAttribute("href", image)
  a.click()
}
