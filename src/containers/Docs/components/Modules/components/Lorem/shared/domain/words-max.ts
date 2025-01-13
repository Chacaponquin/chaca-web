import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const WORDS_MAX: Param = {
  name: "wordsMax",
  description: {
    es: "Cantidad máxima de palabras en cada oración",
    en: "Maximum count of words in each sentence",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
