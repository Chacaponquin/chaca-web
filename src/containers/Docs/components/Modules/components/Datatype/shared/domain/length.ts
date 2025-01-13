import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const LENGTH: Param = {
  name: "length",
  description: { es: "Longitud de la cadena de texto a generar", en: "String length" },
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
