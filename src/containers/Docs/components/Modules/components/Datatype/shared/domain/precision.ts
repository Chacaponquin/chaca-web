import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const PRECISION: Param = {
  name: "precision",
  description:
    "Cantidad de valores que se encontrarán después del punto flotante. Por ejemplo: definir 4 como precisión generaría un valor de forma X.XXXX",
  params: [],
  required: false,
  types: [COMMON_TYPES.NUMBER],
}
