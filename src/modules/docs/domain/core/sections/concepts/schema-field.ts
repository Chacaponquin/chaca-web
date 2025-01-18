import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = { id: "params", title: { es: "Parámetros", en: "Params" } }

export const ARRAY_FIELDS: SectionTitle = {
  id: "array-fields",
  title: { es: "Campos que son arreglos", en: "Array fields" },
}

export const ARRAY_LIMITS: SectionTitle = {
  id: "array-limits",
  title: { es: "Límites del arreglo", en: "Array limits" },
}

export const ARRAY_LIMIT_FUNCTION: SectionTitle = {
  id: "array-limit-function",
  title: { es: "Límites a través de una función", en: "Array limits function" },
}

export const NULL_FIELDS: SectionTitle = {
  id: "null-fields",
  title: { es: "Campos nulos", en: "Null fields" },
}

export const SPECIFIC_NULL_NUMBER: SectionTitle = {
  id: "specific-null-number",
  title: { es: "Cantidad específica de campos nulos", en: "Specific amount of null fields" },
}

export const NULL_PROBABILITY: SectionTitle = {
  id: "null-probability",
  title: { es: "Probabilidades de valor nulo", en: "Null value probabilities" },
}

export const NULL_FUNCTION: SectionTitle = {
  id: "null-function",
  title: { es: "Valor nulo a través de funciones", en: "Null value function" },
}

export class SchemaField extends DocSubSection {
  readonly arrayFieldsUrl = this.buildUrl(ARRAY_FIELDS.id)
  readonly nullFieldsUrl = this.buildUrl(NULL_FIELDS.id)

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Schema field", es: "Campos de un schema" },
      url: "schema-field",
      description: {
        es: "Aprende sobre los parámetros que pueden configurar la definición de un campo dentro de un schema en Chaca",
        en: "Learn about the parameters that can configure the schema field definition in Chaca",
      },
    })

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
