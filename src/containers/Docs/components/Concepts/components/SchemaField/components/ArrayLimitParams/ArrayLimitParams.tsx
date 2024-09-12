import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function ArrayLimitParams() {
  const params: Param[] = [
    {
      name: "min",
      description: "Longitud mínima que puede tener el arreglo",
      required: false,
      params: [],
      types: ["ArrayMin"],
    },
    {
      name: "max",
      description: "Longitud máxima que puede tener el arreglo",
      params: [],
      required: false,
      types: ["ArrayMax"],
      default: "1000",
    },
  ]

  return <Params params={params} />
}
