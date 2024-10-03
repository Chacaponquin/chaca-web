import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const YEARS: Param = {
  name: "years",
  description: "Rango de años en los que se encuentra la fecha a generar",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
