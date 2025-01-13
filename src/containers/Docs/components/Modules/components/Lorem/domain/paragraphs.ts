import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const PARAGRAPHS_CODE = `
modules.lorem.paragraphs()
`

export const PARAGRAPHS_PARAMS: Param[] = [
  {
    name: "paragraphsCount",
    description: { es: "Cantidad de párrafos a generar", en: "Paragraphs count" },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "3",
  },
  {
    name: "separator",
    description: { es: "Separador entre párrafos", en: "Separator between paragraphs" },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "/n",
  },
  {
    name: "minSentences",
    description: {
      es: "Cantidad mínima de oraciones que puede tener cada párrafo",
      en: "Minimum count of sentences that each paragraph can have",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "maxSentences",
    description: {
      es: "Cantidad máxima de oraciones que puede tener cada párrafo",
      en: "Maximun count of sentences that each paragraph can have",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]
