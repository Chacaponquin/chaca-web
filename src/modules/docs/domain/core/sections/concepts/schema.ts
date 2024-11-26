import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const NESTED_SCHEMA: SectionTitle = { id: "nested-schema", title: "Schemas anidados" }

export const EXPORT_DATA: SectionTitle = { id: "export", title: "Exportar datos del schema" }

export const PARAMS: SectionTitle = { id: "params", title: "Parámetros" }

export const EXAMPLE: SectionTitle = { id: "example", title: "Ejemplo" }

export const DEFINITION: SectionTitle = { id: "definition", title: "Definir un schema" }

export const GENERATE_DATA: SectionTitle = { id: "generate", title: "Generar datos del schema" }

export const TRANSFORM_DATA: SectionTitle = {
  id: "transform",
  title: "Transformas datos del schema",
}

export const TRANSFORM_EXAMPLE: SectionTitle = {
  id: "transform-definition",
  title: "Ejemplo",
}

export const TRANSFORM_PARAMS: SectionTitle = {
  id: "transform-params",
  title: "Parámetros",
}

export class Schema extends DocSubSection {
  readonly nestedSchemaUrl = this.buildUrl(NESTED_SCHEMA.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Schema", url: "schema" })

    this.titles = [
      NESTED_SCHEMA,
      EXPORT_DATA,
      PARAMS,
      EXAMPLE,
      DEFINITION,
      GENERATE_DATA,
      TRANSFORM_DATA,
      TRANSFORM_EXAMPLE,
      TRANSFORM_PARAMS,
    ]
  }
}
