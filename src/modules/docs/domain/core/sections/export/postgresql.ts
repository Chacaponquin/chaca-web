import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const TRANSFORMATIONS: SectionTitle = { id: "transformations", title: "Transformaciones" }

export const KEY: SectionTitle = { id: "key-fields", title: "Campos llave" }

export const REF: SectionTitle = { id: "ref-field", title: "Referencias" }

export const NESTED_SCHEMA: SectionTitle = { id: "schema", title: "Schemas" }

export const NULL_FIELDS: SectionTitle = { id: "null-fields", title: "Campos nulos" }

export const ARRAYS: SectionTitle = { id: "arrays", title: "Arreglos" }

export class Postgres extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "PostgreSQL", url: "postgres" })

    this.titles = [TRANSFORMATIONS, KEY, REF, NESTED_SCHEMA, NULL_FIELDS, ARRAYS]
  }
}
