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
    })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
