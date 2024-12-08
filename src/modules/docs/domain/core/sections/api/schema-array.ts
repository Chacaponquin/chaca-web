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
    })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
