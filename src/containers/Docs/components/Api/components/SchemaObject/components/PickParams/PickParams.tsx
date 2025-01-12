import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function PickParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("pick"),
    {
      name: "values",
      description: {
        es: "Arreglo de valores que pueden ser escogidos",
        en: "Array of values that can be chosen",
      },
      params: [],
      types: ["any[]"],
      required: true,
    },
    {
      name: "count",
      description: {
        es: "Cantidad de valores que serán escogidos",
        en: "Count of values to be chosen",
      },
      params: [
        {
          name: "min",
          description: {
            es: "Cantidad mínima de valores que pueden ser escogidos",
            en: "Minimum number of values that can be chosen",
          },
          params: [],
          required: false,
          default: "0",
          types: [COMMON_TYPES.NUMBER],
        },
        {
          name: "max",
          description: {
            es: "Cantidad máxima de valores que pueden ser escogidos",
            en: "Maximum number of values that can be chosen",
          },
          params: [],
          required: false,
          types: [COMMON_TYPES.NUMBER],
          default: "values.length",
        },
      ],
      required: true,
      types: [COMMON_TYPES.NUMBER, "{ min: number, max: number }"],
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
