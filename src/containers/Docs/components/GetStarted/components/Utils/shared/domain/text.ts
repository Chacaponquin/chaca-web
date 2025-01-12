import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const TEXT_PARAM: Param = {
  name: "text",
  description: { es: "Cadena de texto a transformar", en: "String to transform" },
  params: [],
  required: true,
  types: [COMMON_TYPES.STRING],
}
