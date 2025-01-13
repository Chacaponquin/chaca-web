import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MIN: Param = {
  name: "min",
  description: {
    es: "Límite inferior que puede tomar el valor a generar",
    en: "Lower limit that the value can take",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
