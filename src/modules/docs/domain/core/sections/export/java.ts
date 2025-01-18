import { DocSection } from "../../base"
import { ExportSubSection } from "./base"

export class Java extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Java", url: "java" })
  }
}
