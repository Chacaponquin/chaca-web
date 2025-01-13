import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const CALL_DURATION_CODE = `
modules.phone.callDuration({ min: 10, max: 30 }) // '27:30'
modules.phone.callDuration() // '20:52'
`

export const CALL_DURATION_PARAMS: Param[] = [
  {
    name: "min",
    description: {
      es: "Mínima cantidad de minutos que puede tener la llamada",
      en: "Minimum count of minutes that the call can have",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "max",
    description: {
      es: "Máxima cantidad de minutos que puede tener la llamada",
      en: "Maximum count of minutes that the call can have",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]
