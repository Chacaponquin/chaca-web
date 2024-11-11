import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const PARAGRAPHS_CODE = `
modules.lorem.paragraphs()
`

export const PARAGRAPHS_PARAMS: Param[] = [
  {
    name: "paragraphsCount",
    description: "Cantidad de párrafos a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "3",
  },
  {
    name: "separator",
    description: "Separador entre párrafos",
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "/n",
  },
  {
    name: "minSentences",
    description: "Cantidad mínima de oraciones que puede tener cada párrafo",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "maxSentences",
    description: "Cantidad máxima de oraciones que puede tener cada párrafo",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]
