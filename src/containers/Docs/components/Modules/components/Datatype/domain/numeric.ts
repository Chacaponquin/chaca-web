import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { BANNED } from "../shared/domain/banned"
import { PREFIX } from "../shared/domain/prefix"
import { LENGTH } from "../shared/domain/length"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const NUMERIC_CODE = `
modules.datatype.numeric() // '2'
modules.datatype.numeric({ length: 42, allowLeadingZeros: false }) // '72564846278453876543517840713421451546115'
modules.datatype.numeric({ length: 6, exclude: ['0'] }) // '943228'
`

export const NUMERIC_PARAMS: Param[] = [
  BANNED,
  PREFIX,
  LENGTH,
  {
    name: "allowLeadingZeros",
    description: {
      es: "La cadena de texto puede tener 1 o más ceros en su inicio",
      en: "The string may have 1 or more zeros at the beginning",
    },
    types: [COMMON_TYPES.BOOLEAN],
    params: [],
    required: false,
  },
]
