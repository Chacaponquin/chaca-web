import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = { id: "params", title: "Parámetros" }

export const ARRAY_FIELDS: SectionTitle = { id: "array-fields", title: "Campos que son arreglos" }

export const ARRAY_LIMITS: SectionTitle = { id: "array-limits", title: "Límites del arreglo" }

export const ARRAY_LIMIT_FUNCTION: SectionTitle = {
  id: "array-limit-function",
  title: "Límites a través de una función",
}

export const NULL_FIELDS: SectionTitle = { id: "null-fields", title: "Campos nulos" }

export const SPECIFIC_NULL_NUMBER: SectionTitle = {
  id: "specific-null-number",
  title: "Cantidad específica de campos nulos",
}

export const NULL_PROBABILITY: SectionTitle = {
  id: "null-probability",
  title: "Probabilidades de valor nulo",
}

export const NULL_FUNCTION: SectionTitle = {
  id: "null-function",
  title: "Valor nulo a través de funciones",
}

export class SchemaField extends DocSubSection {
  readonly arrayFieldsUrl = this.buildUrl(ARRAY_FIELDS.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Schema field", url: "schema-field" })

    this.titles = [
      PARAMS,
      ARRAY_FIELDS,
      ARRAY_LIMITS,
      ARRAY_LIMIT_FUNCTION,
      NULL_FIELDS,
      SPECIFIC_NULL_NUMBER,
      NULL_PROBABILITY,
      NULL_FUNCTION,
    ]
  }
}
