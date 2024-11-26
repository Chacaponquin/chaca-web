import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const SLUG_PARAMS: Param[] = [
  {
    name: "wordCount",
    description: "Cantidad de palabras en la cadena de texto",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "3",
  },
]

export const SLUG_CODE = `
modules.lorem.slug() // 'lorem-ipsum-ad'
`
