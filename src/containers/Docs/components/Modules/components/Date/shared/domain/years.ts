import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const YEARS: Param = {
  name: "years",
  description: "Rango de años en los que se encuentra la fecha a generar",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
