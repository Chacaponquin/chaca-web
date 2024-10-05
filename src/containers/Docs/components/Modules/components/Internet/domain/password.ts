import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const PASSWORD_CODE = `
modules.internet.password() // '89G1wJuBLbGziIs'
modules.internet.password({ length: 20 }) // 'aF55c_8O9kZaPOrysFB_'
modules.internet.password({ length: 20, memorable: true }) // 'lawetimufozujosodedi'
modules.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ }) // 'HMAQDFFYLDDUTBKVNFVS'
modules.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' }) // 'Hello IREOXTDWPERQSB'
`

export const PASSWORD_PARAMS: Param[] = [
  {
    name: "length",
    description: "Longitud de la contraseña a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "15",
  },
  {
    name: "memorable",
    description: "Indica si la contraseña debe tener un patrón memorizable",
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
  },
  {
    name: "prefix",
    description: "Cadena de texto que aparecerá al inicio de la contraseña",
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "''",
  },
  {
    name: "pattern",
    description:
      "Expresión regular con la que deben cumplir todos los caracteres. Si el parámetro 'memorable' tiene valor 'true' este parámetro no se tendrá en cuenta",
    params: [],
    required: false,
    types: [COMMON_TYPES.REG_EXP],
    default: "/w/",
  },
]
