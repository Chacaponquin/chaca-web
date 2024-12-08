import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: { en: "Body", es: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Ejemplo" } }

export class TransformDatasetSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Transform Dataset", es: "Transform Dataset" },
      url: "transform-dataset",
    })

    this.titles = [BODY, EXAMPLE]
  }
}
