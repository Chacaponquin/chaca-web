import { DocSection } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export class Word extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Word", url: "word", apiId: "word" })
  }
}
