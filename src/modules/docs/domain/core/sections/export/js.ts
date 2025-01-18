import { DocSection } from "../../base"
import { ExportSubSection } from "./base"

export class Javascript extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Javascript", url: "javascript" })
  }
}
