import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function PickParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("pick"),
    {
      name: "values",
      description: "Arreglo de valores que pueden ser escogidos",
      params: [],
      types: ["any[]"],
      required: true,
    },
    {
      name: "count",
      description: "Cantidad de valores que serán escogidos",
      params: [
        {
          name: "min",
          description: "Cantidad mínima de valores que pueden ser escogidos",
          params: [],
          required: false,
          default: "0",
          types: [COMMON_TYPES.NUMBER],
        },
        {
          name: "max",
          description: "Cantidad máxima de valores que pueden ser escogidos",
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
