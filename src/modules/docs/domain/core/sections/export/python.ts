import { DocSection } from "../../base"
import { ExportSubSection } from "./base"

export class Python extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Python", url: "python" })
  }
}
