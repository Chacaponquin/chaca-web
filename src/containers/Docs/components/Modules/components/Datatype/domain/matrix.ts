import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { MIN } from "../shared/domain/min"
import { MAX } from "../shared/domain/max"
import { PRECISION } from "../shared/domain/precision"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MATRIX_PARAMS: Param[] = [
  {
    name: "x_size",
    params: [],
    description: { es: "Cantidad de filas para la matriz", en: "Rows count" },
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "y_size",
    params: [],
    description: { es: "Cantidad de columnas de la matriz", en: "Columns count" },
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  MIN,
  MAX,
  PRECISION,
]

export const MATRIX_CODE = `
modules.datatype.matrix() // [[1, 0, 5], [5, 10, 9]]
modules.datatype.matrix({ x_size: 4, y_size: 2 }) // [[1, 2], [0, 0], [1, 1], [4, 5]]
`
