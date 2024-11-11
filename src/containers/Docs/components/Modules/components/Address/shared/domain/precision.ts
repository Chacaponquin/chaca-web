import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const PRECISION: Param = {
  name: "precision",
  description: "Precisión decimal del valor a generar",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
  default: "4",
}
