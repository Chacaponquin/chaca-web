import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function ArrayLimitParams() {
  const params: Param[] = [
    {
      name: "min",
      description: "Longitud mínima que puede tener el arreglo",
      required: false,
      params: [],
      types: [COMMON_TYPES.NUMBER],
      default: "0",
    },
    {
      name: "max",
      description: "Longitud máxima que puede tener el arreglo",
      params: [],
      required: false,
      types: [COMMON_TYPES.NUMBER],
      default: "1000",
    },
  ]

  return <Params params={params} />
}
