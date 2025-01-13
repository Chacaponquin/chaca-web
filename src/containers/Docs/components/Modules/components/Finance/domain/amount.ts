import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const AMOUNT_CODE = `
modules.finance.amount()// '$6170.87'
modules.finance.amount({ min: 0, max: 1000 }) // '$5.53'
modules.finance.amount({ min: 0, max: 1000, symbol: '€', precision: 0 }) // '€5'
`

export const AMOUNT_PARAMS: Param[] = [
  {
    name: "min",
    description: {
      es: "Límite inferior para la cantidad a generar",
      en: "Lower limit for the amount",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "max",
    description: {
      es: "Límite superior para la cantidad a generar",
      en: "Upper limit for the amount",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "precision",
    description: {
      es: "Cantidad de valores después del punto flotante",
      en: "Count of values after floating point",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "symbol",
    description: {
      es: "Símbolo monetario que aparece delante de la cantidad de dinero",
      en: "Money symbol that appears before the amount",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "$",
  },
]
