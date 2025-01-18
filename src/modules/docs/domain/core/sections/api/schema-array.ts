import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = {
  id: "params",
  title: { es: "Parámetros", en: "Query params" },
}

export const BODY: SectionTitle = { id: "body", title: { en: "Body", es: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Ejemplo" } }

export class SchemaArraySection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Schema Array", es: "Schema Array" },
      url: "schema-array",
      description: {
        es: "Aprende sobre la ruta /schema de nuestra API REST para generar un arreglo de datos a través de la definición de un schema",
        en: "Learn about the /schema route of our REST API to generate a data array with a schema definition",
      },
    })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
