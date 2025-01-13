import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

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
    description: { es: "Longitud de la contraseña a generar", en: "Password length" },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
    default: "15",
  },
  {
    name: "memorable",
    description: {
      es: "La contraseña debe tener un patrón memorizable",
      en: "The password should have a memorable pattern",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.BOOLEAN],
  },
  {
    name: "prefix",
    description: {
      es: "Cadena de texto que aparecerá al inicio de la contraseña",
      en: "String that will appear at the beginning of the password",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "''",
  },
  {
    name: "pattern",
    description: {
      es: "Expresión regular con la que deben cumplir todos los caracteres. Si el parámetro 'memorable' tiene valor 'true' este parámetro no se tendrá en cuenta",
      en: "Regular expression that all characters must match. If the parameter 'memorable' has the value 'true' this parameter will not be taken",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.REG_EXP],
    default: "/w/",
  },
]
