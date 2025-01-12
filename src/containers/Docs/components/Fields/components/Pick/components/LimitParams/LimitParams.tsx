import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function LimitParams() {
  const params: Param[] = [
    {
      name: "min",
      description: {
        es: "Cantidad mínima de valores a escoger",
        en: "Minimum count of values to choose from",
      },
      params: [],
      required: false,
      default: "0",
      types: [COMMON_TYPES.NUMBER],
    },
    {
      name: "max",
      description: {
        es: "Cantidad máxima de valores a escoger",
        en: "Maximum count of values to choose from",
      },
      params: [],
      required: false,
      default: "values.length",
      types: [COMMON_TYPES.NUMBER],
    },
  ]

  return <Params params={params} />
}
