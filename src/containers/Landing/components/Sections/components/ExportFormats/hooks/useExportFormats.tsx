import { APP_IMAGES } from "@modules/app/constants/image"
import { FormatCard } from "../interfaces"

const FORMATS: FormatCard[] = [
  { format: "csv", image: APP_IMAGES.PRESENTATION.EXTENSIONS.CSV },
  { format: "java", image: APP_IMAGES.PRESENTATION.EXTENSIONS.JAVA },
  { format: "javascript", image: APP_IMAGES.PRESENTATION.EXTENSIONS.JS },
  { format: "json", image: APP_IMAGES.PRESENTATION.EXTENSIONS.JSON },
  { format: "postgresql", image: APP_IMAGES.PRESENTATION.EXTENSIONS.POSTGRESQL },
  { format: "python", image: APP_IMAGES.PRESENTATION.EXTENSIONS.PYTHON },
  { format: "typescript", image: APP_IMAGES.PRESENTATION.EXTENSIONS.TS },
  { format: "yaml", image: APP_IMAGES.PRESENTATION.EXTENSIONS.YAML },
]

export default function useExportFormats() {
  return { FORMATS }
}
