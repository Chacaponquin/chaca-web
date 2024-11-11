import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const PREFIX: Param = {
  name: "prefix",
  description: "Cadena de texto que aparece al principio",
  params: [],
  required: false,
  types: [COMMON_TYPES.STRING],
}
