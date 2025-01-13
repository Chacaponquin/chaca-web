import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const PRECISION: Param = {
  name: "precision",
  description: {
    es: "Cantidad de valores que se encontrarán después del punto flotante. Por ejemplo: definir 4 como precisión generaría un valor de forma X.XXXX",
    en: "Count of values to be found after the floating point. For example: defining 4 as precision would generate a value with X.XXXX pattern",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
