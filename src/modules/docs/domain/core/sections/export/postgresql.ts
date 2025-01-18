import { DocSection, SectionTitle } from "../../base"
import { ExportSubSection } from "./base"

export const TRANSFORMATIONS: SectionTitle = {
  id: "transformations",
  title: { es: "Transformaciones", en: "Transformations" },
}

export const KEY: SectionTitle = {
  id: "key-fields",
  title: { es: "Campos llave", en: "Key fields" },
}

export const REF: SectionTitle = {
  id: "ref-field",
  title: { es: "Referencias", en: "Reference fields" },
}

export const NESTED_SCHEMA: SectionTitle = { id: "schema", title: { es: "Schemas", en: "Schemas" } }

export const NULL_FIELDS: SectionTitle = {
  id: "null-fields",
  title: { es: "Campos nulos", en: "Null fields" },
}

export const ARRAYS: SectionTitle = { id: "arrays", title: { es: "Arreglos", en: "Arrays" } }

export class Postgres extends ExportSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "PostgresSQL", url: "postgres" })

    this.titles = [TRANSFORMATIONS, KEY, REF, NESTED_SCHEMA, NULL_FIELDS, ARRAYS]
  }
}
