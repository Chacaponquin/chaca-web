import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const YEARS: Param = {
  name: "years",
  description: {
    es: "Rango de años en los que se encuentra la fecha a generar",
    en: "Range of years in which the date falls",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
