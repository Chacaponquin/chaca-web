import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: { en: "Body", es: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Ejemplo" } }

export class DatasetSection extends DocSubSection {
  readonly bodyUrl = this.buildIdUrl(BODY.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Dataset", es: "Dataset" }, url: "dataset" })

    this.titles = [BODY, EXAMPLE]
  }
}
