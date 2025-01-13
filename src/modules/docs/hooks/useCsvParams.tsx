import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"
import { TranslationConfig } from "@modules/app/modules/language/interfaces"

export default function useCsvParans() {
  const EXPAND_NESTED_OBJECTS: Param = {
    name: "expandNestedObjects",
    required: false,
    default: "true",
    types: [COMMON_TYPES.BOOLEAN],
    description: {
      es: "Las propiedades de los objetos anidados deben ser convertidos en columnas CSV",
      en: "Nested object properties must be converted to CSV columns",
    },
    params: [],
  }

  const UNWIND_ARRAYS: Param = {
    name: "unwindArrays",
    description: {
      es: "Cada objeto del arreglo será descompuesto en una línea dentro del CSV",
      en: "Each object in the array will be broken down into a line inside the CSV",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
    default: "false",
  }

  const SORT_HEADER: Param = {
    name: "sortHeader",
    description: {
      es: "Organizar las cabeceras de las columnas en orden alfabético",
      en: "Organize column headers in alphabetical order",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
    default: "false",
  }

  const EXPAND_ARRAY_OBJECTS: Param = {
    name: "expandArrayObjects",
    default: "false",
    types: [COMMON_TYPES.BOOLEAN],
    params: [],
    description: {
      es: "Las propiedades de los objetos anidados dentro de un arreglo deben ser convertidos en columnas CSV",
      en: "Properties of objects nested within an array must be converted to CSV columns",
    },
    required: false,
  }

  const TRIM_FIELDS_DESC: TranslationConfig<string> = {
    es: "Elimina los espacios en blanco al inicio y al final de los valores de los campos",
    en: "Remove leading and trailing whitespace from field values",
  }

  const TRIM_HEADERS_DESC: TranslationConfig<string> = {
    es: "Elimina los espacios en blanco al inicio y al final de las cabeceras de las columnas",
    en: "Remove leading and trailing whitespace from column headers",
  }

  return {
    EXPAND_ARRAY_OBJECTS,
    UNWIND_ARRAYS,
    SORT_HEADER,
    EXPAND_NESTED_OBJECTS,
    TRIM_FIELDS_DESC,
    TRIM_HEADERS_DESC,
  }
}
