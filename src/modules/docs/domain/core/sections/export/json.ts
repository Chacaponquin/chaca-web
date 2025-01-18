import { DocSection } from "../../base"
import { ExportSubSection } from "./base"

export class Json extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Json", url: "json" })
  }
}
