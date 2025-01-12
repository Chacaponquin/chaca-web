import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function ArrayLimitParams() {
  const params: Param[] = [
    {
      name: "min",
      description: {
        es: "Longitud mínima que puede tener el arreglo",
        en: "Minimum length that the array can have",
      },
      required: false,
      params: [],
      types: [COMMON_TYPES.NUMBER],
      default: "0",
    },
    {
      name: "max",
      description: {
        es: "Longitud máxima que puede tener el arreglo",
        en: "Maximum length that the array can have",
      },
      params: [],
      required: false,
      types: [COMMON_TYPES.NUMBER],
      default: "1000",
    },
  ]

  return <Params params={params} />
}
