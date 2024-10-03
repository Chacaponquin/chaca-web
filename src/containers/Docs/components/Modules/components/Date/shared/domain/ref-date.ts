import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const REF_DATE: Param = {
  name: "refDate",
  description: "Fecha que se usa como punto de referencia para el rango definido",
  params: [],
  required: false,
  types: [COMMON_TYPES.DATE],
  default: "new Date()",
}
