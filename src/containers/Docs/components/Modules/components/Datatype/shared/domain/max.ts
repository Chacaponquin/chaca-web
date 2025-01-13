import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const MAX: Param = {
  name: "max",
  description: {
    es: "Límite superior que puede tomar el valor a generar",
    en: "Upper limit that the value can take",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
