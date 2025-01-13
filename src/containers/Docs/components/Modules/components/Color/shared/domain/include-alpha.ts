import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export function INCLUDE_ALPHA(def: string): Param {
  return {
    name: "includeAlpha",
    description: {
      es: "Añade un valor alpha al color generado",
      en: "Adds an alpha value to the generated color",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
    default: def,
  }
}
