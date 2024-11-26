import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const WORDS_MAX: Param = {
  name: "wordsMax",
  description: "Cantidad máxima de palabras en cada oración",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
