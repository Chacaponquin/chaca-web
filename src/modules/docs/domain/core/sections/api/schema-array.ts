import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = { id: "params", title: "Parámetros" }

export const BODY: SectionTitle = { id: "body", title: "Body" }

export const EXAMPLE: SectionTitle = { id: "example", title: "Example" }

export class SchemaArraySection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Schema Array", url: "schema-array" })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
