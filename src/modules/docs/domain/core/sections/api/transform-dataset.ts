import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: { en: "Body", es: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Ejemplo" } }

export class TransformDatasetSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Transform Dataset", es: "Transform Dataset" },
      url: "transform-dataset",
      description: {
        es: "Aprende a utilizar la ruta /dataset/transform de nuestra API REST para generar y transformar datos de un dataset en formato json, csv, sql, entre otros",
        en: "Learn how to use the /dataset/transform route of our REST API to generate and transform data from a dataset in json, csv, sql, and other formats.",
      },
    })

    this.titles = [BODY, EXAMPLE]
  }
}
