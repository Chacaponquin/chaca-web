import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const LENGTH: Param = {
  name: "length",
  description: "Longitud de la cadena de texto a generar",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
