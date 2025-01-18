import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: { en: "Body", es: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Ejemplo" } }

export class DatasetSection extends DocSubSection {
  readonly bodyUrl = this.buildIdUrl(BODY.id)

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Dataset", es: "Dataset" },
      url: "dataset",
      description: {
        es: "Aprende sobre la ruta /dataset de nuestra API REST para generar datos a través de la definición de un dataset",
        en: "Learn about the /dataset route of our REST API to generate data with a dataset definition",
      },
    })

    this.titles = [BODY, EXAMPLE]
  }
}
