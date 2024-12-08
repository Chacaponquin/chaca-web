import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const NESTED_SCHEMA: SectionTitle = {
  id: "nested-schema",
  title: { es: "Schemas anidados", en: "Nested schemas" },
}

export const EXPORT_DATA: SectionTitle = {
  id: "export",
  title: { es: "Exportar datos del schema", en: "Export schema data" },
}

export const EXAMPLE: SectionTitle = { id: "example", title: { es: "Ejemplo", en: "Example" } }

export const DEFINITION: SectionTitle = {
  id: "definition",
  title: { es: "Definir un schema", en: "Schema definition" },
}

export const GENERATE_DATA: SectionTitle = {
  id: "generate",
  title: { es: "Generar datos del schema", en: "Generate schema data" },
}

export const TRANSFORM_DATA: SectionTitle = {
  id: "transform",
  title: { es: "Transformar datos del schema", en: "Transform schema data" },
}

export const TRANSFORM_EXAMPLE: SectionTitle = {
  id: "transform-definition",
  title: { es: "Ejemplo", en: "Example" },
}

export class Schema extends DocSubSection {
  readonly nestedSchemaUrl = this.buildUrl(NESTED_SCHEMA.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Schema", es: "Schema" }, url: "schema" })

    this.titles = [
      NESTED_SCHEMA,
      EXPORT_DATA,
      EXAMPLE,
      DEFINITION,
      GENERATE_DATA,
      TRANSFORM_DATA,
      TRANSFORM_EXAMPLE,
    ]
  }
}
