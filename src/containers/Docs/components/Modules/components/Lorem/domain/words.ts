import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const WORDS_CODE = `
modules.lorem.words() // 'lorem ipsum in'
`

export const WORDS_PARAMS: Param[] = [
  {
    name: "count",
    description: { es: "Cantidad de palabras a generar", en: "Word count" },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "5",
  },
]
