import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: "Body" }

export const EXAMPLE: SectionTitle = { id: "example", title: "Example" }

export class TransformDatasetSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Transform Dataset", url: "transform-data" })

    this.titles = [BODY, EXAMPLE]
  }
}
