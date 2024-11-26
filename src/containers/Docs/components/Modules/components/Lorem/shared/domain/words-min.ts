import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const WORDS_MIN: Param = {
  name: "wordsMin",
  description: "Cantidad mínima de palabras en cada oración",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
