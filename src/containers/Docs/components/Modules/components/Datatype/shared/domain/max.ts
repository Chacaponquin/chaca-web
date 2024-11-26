import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MAX: Param = {
  name: "max",
  description: "Límite superior que puede tomar el valor a generar",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
