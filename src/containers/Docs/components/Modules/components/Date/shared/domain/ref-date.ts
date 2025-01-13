import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const REF_DATE: Param = {
  name: "refDate",
  description: {
    es: "Fecha que se usa como punto de referencia para el rango definido",
    en: "Date used as a reference point for the defined range",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.DATE],
  default: "new Date()",
}
