import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = { id: "params", title: "Parámetros" }

export const BODY: SectionTitle = { id: "body", title: "Body" }

export const EXAMPLE: SectionTitle = { id: "example", title: "example" }

export class ModuleValueSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Module Value", url: "module-value" })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
