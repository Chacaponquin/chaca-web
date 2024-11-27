import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const MIME_TYPE: SectionTitle = { id: "mime_type", title: "mimeType" }

export const FILE_EXT: SectionTitle = { id: "file_ext", title: "fileExt" }

export const FILENAME: SectionTitle = { id: "filename", title: "filename" }

export const DIRECTORY_PATH: SectionTitle = { id: "directory_path", title: "directoryPath" }

export const FILE_PATH: SectionTitle = { id: "file_path", title: "filePath" }

export const CRON: SectionTitle = { id: "cron", title: "cron" }

export class System extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "System", es: "System" }, url: "system", apiId: "system" })

    this.titles = [FILE_EXT, FILENAME, DIRECTORY_PATH, FILE_PATH, MIME_TYPE, CRON]
  }
}
