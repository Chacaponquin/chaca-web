import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const NANOID_CODE = `
modules.id.nanoid() // 'ptL0KpX_yRMI98JFr6B3n'
modules.id.nanoid({ length: 10 }) // 'VsvwSdm_Am'
`

export const NANOID_PARAMS: Param[] = [
  {
    name: "length",
    description: "Longitud de la cadena de texto",
    params: [],
    required: false,
    default: "20",
    types: [COMMON_TYPES.NUMBER],
  },
]
