import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const COMMON_PARAMS: Param[] = [
  {
    name: "width",
    description: { es: "Ancho de la imagen en píxeles", en: "Image width in pixels" },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "height",
    description: { es: "Altura de la imagen en píxeles", en: "Image height in pixels" },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]
