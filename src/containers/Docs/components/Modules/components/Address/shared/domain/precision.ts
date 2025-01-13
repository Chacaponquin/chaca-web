import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const PRECISION: Param = {
  name: "precision",
  description: {
    es: "Precisión decimal del valor a generar",
    en: "Decimal precision of the value to be generated",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
  default: "4",
}
