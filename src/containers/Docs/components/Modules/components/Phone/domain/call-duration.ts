import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const CALL_DURATION_CODE = `
modules.phone.callDuration({ min: 10, max: 30 }) // '27:30'
modules.phone.callDuration() // '20:52'
`

export const CALL_DURATION_PARAMS: Param[] = [
  {
    name: "min",
    description: "Mínima cantidad de minutos que puede tener la llamada",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "max",
    description: "Máxima cantidad de minutos que puede tener la llamada",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]
