import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MIN = (def: number): Param => {
  return {
    name: "min",
    description: {
      es: "Límite inferior del valor a generar",
      en: "Lower limit of the value to generate",
    },
    params: [],
    types: [COMMON_TYPES.NUMBER],
    required: false,
    default: `${def}`,
  }
}
