import { DocSection } from "../../base"
import { ExportSubSection } from "./base"

export class Yaml extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Yaml", url: "yaml" })
  }
}
