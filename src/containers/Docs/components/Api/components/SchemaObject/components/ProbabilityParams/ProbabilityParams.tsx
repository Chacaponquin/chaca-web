import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function ProbabilityParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("probability"),
    {
      name: "values",
      description: "Arreglo de valores que pueden ser escogidos",
      params: [
        {
          name: "value",
          description: "Valor que puede ser escogido",
          params: [],
          required: true,
          types: ["any"],
        },
        {
          name: "chance",
          description: "Valor entre 0 y 1 que indica la probabilidad de que el valor sea escogido",
          params: [],
          required: true,
          types: [COMMON_TYPES.NUMBER],
        },
      ],
      required: true,
      types: ["{ value: any, chance: number }[]"],
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
