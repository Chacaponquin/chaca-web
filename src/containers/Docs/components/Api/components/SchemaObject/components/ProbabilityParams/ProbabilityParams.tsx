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
      description: {
        es: "Arreglo de valores que pueden ser escogidos",
        en: "Array of values that can be chosen",
      },
      params: [
        {
          name: "value",
          description: { es: "Valor que puede ser escogido", en: "Value that can be chosen" },
          params: [],
          required: true,
          types: ["any"],
        },
        {
          name: "chance",
          description: {
            es: "Valor entre 0 y 1 que indica la probabilidad de que el valor sea escogido",
            en: "Value between 0 and 1 that indicates the probability that the value will be chosen",
          },
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
