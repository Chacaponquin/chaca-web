import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const MIME_TYPE: ModuleSubSectionTitle = { id: "mime_type", title: "mimeType" }

export const FILE_EXT: ModuleSubSectionTitle = { id: "file_ext", title: "fileExt" }

export const FILENAME: ModuleSubSectionTitle = { id: "filename", title: "filename" }

export const DIRECTORY_PATH: ModuleSubSectionTitle = {
  id: "directory_path",
  title: "directoryPath",
}

export const FILE_PATH: ModuleSubSectionTitle = { id: "file_path", title: "filePath" }

export const CRON: ModuleSubSectionTitle = { id: "cron", title: "cron" }

export class System extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "System", es: "System" },
      url: "system",
      apiId: "system",
      titles: [FILE_EXT, FILENAME, DIRECTORY_PATH, FILE_PATH, MIME_TYPE, CRON],
    })
  }
}
