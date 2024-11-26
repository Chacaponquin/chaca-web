import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"
import { FORMAT } from "../shared/domain/format"
import { INCLUDE_ALPHA } from "../shared/domain/include-alpha"

export const RGB_PARAMS: Param[] = [
  FORMAT("hex"),
  {
    name: "casing",
    description:
      "Tamaño de letra para el color generado. Solo es aplicable cuando el formato tiene valor 'hex'",
    params: [],
    required: false,
    types: ["'lower'", "'upper'", "'mixed'"],
    default: "'mixed'",
  },
  {
    name: "prefix",
    description: "Cadena de texto que aparece al inicio del color generado",
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "'#'",
  },
  INCLUDE_ALPHA("false"),
]

export const RGB_CODE = `
modules.color.rgb({ prefix: '#' }) // '#ffffFF'
modules.color.rgb({ casing: 'upper' }) // '0xFFFFFF'
modules.color.rgb({ casing: 'lower' }) // '0xffffff'
modules.color.rgb({ prefix: '#', casing: 'lower' }) // '#ffffff'
modules.color.rgb({ format: 'hex', casing: 'lower' }) // '#ffffff'
modules.color.rgb({ format: 'css' }) // 'rgb(255, 0, 0)'
modules.color.rgb({ format: 'binary' }) // '10000000 00000000 11111111'
`
