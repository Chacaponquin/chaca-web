import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { WORDS_MAX } from "../shared/domain/words-max"
import { WORDS_MIN } from "../shared/domain/words-min"

export const SENTENCES_CODE = `
modules.lorem.sentences()
`

export const SENTENCES_PARAMS: Param[] = [
  {
    name: "sentencesCount",
    description: "Cantidad de oraciones a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "3",
  },
  {
    name: "separator",
    description: "Separador entre oraciones",
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "/n",
  },
  WORDS_MAX,
  WORDS_MIN,
]
