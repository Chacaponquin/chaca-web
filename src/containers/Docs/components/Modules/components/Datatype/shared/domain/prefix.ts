import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const PREFIX: Param = {
  name: "prefix",
  description: "Cadena de texto que aparece al principio",
  params: [],
  required: false,
  types: [COMMON_TYPES.STRING],
}
