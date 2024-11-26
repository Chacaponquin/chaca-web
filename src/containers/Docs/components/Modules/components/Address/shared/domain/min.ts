import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MIN = (def: number): Param => {
  return {
    name: "min",
    description: "Límite inferior del valor a generar",
    params: [],
    types: [COMMON_TYPES.NUMBER],
    required: false,
    default: `${def}`,
  }
}
