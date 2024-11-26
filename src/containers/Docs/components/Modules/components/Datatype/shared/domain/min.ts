import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MIN: Param = {
  name: "min",
  description: "Límite inferior que puede tomar el valor a generar",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
