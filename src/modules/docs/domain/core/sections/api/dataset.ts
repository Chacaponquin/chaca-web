import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: "Body" }

export const EXAMPLE: SectionTitle = { id: "example", title: "Example" }

export class DatasetSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Dataset", url: "dataset" })

    this.titles = [BODY, EXAMPLE]
  }
}
