import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = {
  id: "params",
  title: { es: "Parámetros", en: "Query params" },
}

export const BODY: SectionTitle = { id: "body", title: { es: "Body", en: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Ejemplo" } }

export class TransformSchemaSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Transform Schema", es: "Transform Schema" },
      url: "transform-schema",
      description: {
        es: "Aprende a utilizar la ruta /schema/transform de nuestra API REST para generar y transformar datos de un schema en formato json, csv, sql, entre otros",
        en: "Learn how to use the /schema/transform route of our REST API to generate and transform data from a schema in json, csv, sql format, and others.",
      },
    })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
