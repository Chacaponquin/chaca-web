import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const PIN_CODE = `
modules.finance.pin() // '5067'
modules.finance.pin({ length: 6 }) // '213789'
`

export const PIN_PARAMS: Param[] = [
  {
    name: "length",
    description: "Longitud del código PIN",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "4",
  },
]
