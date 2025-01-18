import { DocSection } from "../../base"
import { ExportSubSection } from "./base"

export class Csv extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "CSV", url: "csv" })
  }
}
