import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const COMMON_PARAMS: Param[] = [
  {
    name: "width",
    description: "Ancho de la imagen en píxeles",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "height",
    description: "Altura de la imagen en píxeles",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]
