import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const MIN: Param = {
  name: "min",
  description: "Límite inferior que puede tomar el valor a generar",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
