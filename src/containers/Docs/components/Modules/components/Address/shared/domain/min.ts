import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

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
