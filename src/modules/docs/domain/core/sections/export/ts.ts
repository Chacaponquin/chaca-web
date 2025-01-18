import { DocSection } from "../../base"
import { ExportSubSection } from "./base"

export class Typescript extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Typescript", url: "typescript" })
  }
}
