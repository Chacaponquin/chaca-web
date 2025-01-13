import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const PREFIX: Param = {
  name: "prefix",
  description: {
    es: "Cadena de texto que aparece al principio del valor generado",
    en: "String that appears at the value beginning",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.STRING],
}
