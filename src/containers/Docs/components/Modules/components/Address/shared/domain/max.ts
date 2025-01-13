import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MAX = (def: number): Param => {
  return {
    name: "min",
    description: {
      es: "Límite superior del valor a generar",
      en: "Upper limit of the value to be generated",
    },
    params: [],
    types: [COMMON_TYPES.NUMBER],
    required: false,
    default: `${def}`,
  }
}
