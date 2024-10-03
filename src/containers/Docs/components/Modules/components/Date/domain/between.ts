import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const BETWEEN_CODE = `
modules.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }) // '2026-05-16T02:22:53.002Z'
`

export const BETWEEN_PARAMS: Param[] = [
  {
    name: "from",
    description: "Límite inferior de la fecha a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.DATE],
  },
  {
    name: "to",
    description: "Límite superior de la fecha a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.DATE],
  },
]
