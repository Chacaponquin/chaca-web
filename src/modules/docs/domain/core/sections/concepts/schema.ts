import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const NESTED_SCHEMA: SectionTitle = { id: "nested-schema", title: "Schemas anidados" }

export const EXPORT_DATA: SectionTitle = { id: "export", title: "Exportar datos del schema" }

export const PARAMS: SectionTitle = { id: "params", title: "Parámetros" }

export const EXAMPLE: SectionTitle = { id: "example", title: "Ejemplo" }

export const DEFINITION: SectionTitle = { id: "definition", title: "Definir un schema" }

export const GENERATE_DATA: SectionTitle = { id: "generate", title: "Generar datos del schema" }

export class Schema extends DocSubSection {
  readonly nestedSchemaUrl = this.buildUrl(NESTED_SCHEMA.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Schema", url: "schema" })

    this.titles = [NESTED_SCHEMA, EXPORT_DATA, PARAMS, EXAMPLE, DEFINITION, GENERATE_DATA]
  }
}
