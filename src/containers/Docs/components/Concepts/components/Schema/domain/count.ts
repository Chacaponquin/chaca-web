import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const COUNT_PARAM: Param = {
  name: "count",
  description: "Cantidad de documentos a generar",
  params: [],
  required: true,
  types: [COMMON_TYPES.NUMBER],
}
