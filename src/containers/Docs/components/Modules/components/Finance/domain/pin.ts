import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const PIN_CODE = `
modules.finance.pin() // '5067'
modules.finance.pin({ length: 6 }) // '213789'
`

export const PIN_PARAMS: Param[] = [
  {
    name: "length",
    description: { es: "Longitud del código PIN", en: "PIN code length" },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "4",
  },
]
