import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useCsvParans() {
  const EXPAND_NESTED_OBJECTS: Param = {
    name: "expandNestedObjects",
    required: false,
    default: "true",
    types: [COMMON_TYPES.BOOLEAN],
    description: "Las propiedades de los objetos anidados deben ser convertidos en columnas CSV",
    params: [],
  }

  const UNWIND_ARRAYS: Param = {
    name: "unwindArrays",
    description: "Cada objeto del arreglo será descompuesto en una línea dentro del CSV",
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
    default: "false",
  }

  const SORT_HEADER: Param = {
    name: "sortHeader",
    description: "Organizar las cabeceras de las columnas en orden alfabético",
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
    description:
      "Las propiedades de los objetos anidados dentro de un arreglo deben ser convertidos en columnas CSV",
    required: false,
  }

  const TRIM_FIELDS_DESC =
    "Elimina los espacios en blanco al inicio y al final de los valores de los campos"

  const TRIM_HEADERS_DESC =
    "Elimina los espacios en blanco al inicio y al final de las cabeceras de las columnas"

  return {
    EXPAND_ARRAY_OBJECTS,
    UNWIND_ARRAYS,
    SORT_HEADER,
    EXPAND_NESTED_OBJECTS,
    TRIM_FIELDS_DESC,
    TRIM_HEADERS_DESC,
  }
}
