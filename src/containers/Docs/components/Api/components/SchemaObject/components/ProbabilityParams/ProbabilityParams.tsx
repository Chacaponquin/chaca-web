import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function ProbabilityParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("probability"),
    {
      name: "values",
      description: "Arreglo de valores que pueden ser escogidos",
      params: [
        { name: "value", description: "", params: [], required: true, types: ["any"] },
        {
          name: "chance",
          description: "",
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
