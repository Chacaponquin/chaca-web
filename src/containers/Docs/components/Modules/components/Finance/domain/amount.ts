import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const AMOUNT_CODE = `
modules.finance.amount()// '$6170.87'
modules.finance.amount({ min: 0, max: 1000 }) // '$5.53'
modules.finance.amount({ min: 0, max: 1000, symbol: '€', precision: 0 }) // '€5'
`

export const AMOUNT_PARAMS: Param[] = [
  {
    name: "min",
    description: "Límite inferior para la cantidad a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "max",
    description: "Límite superior para la cantidad a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "precision",
    description: "Cantidad de valores despues del punto flotante",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "symbol",
    description: "Símbolo monetario que aparece delante de la cantidad de dinero",
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
    default: "$",
  },
]
