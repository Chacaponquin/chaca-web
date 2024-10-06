import { DocSection } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export class Video extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Video", url: "video", apiId: "video" })
  }
}
