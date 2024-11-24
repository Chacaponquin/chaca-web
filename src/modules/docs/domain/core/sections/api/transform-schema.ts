import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = { id: "params", title: "Parámetros" }

export const BODY: SectionTitle = { id: "body", title: "Body" }

export const EXAMPLE: SectionTitle = { id: "example", title: "Example" }

export class TransformSchemaSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Transform Schema", url: "transform-schema" })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
