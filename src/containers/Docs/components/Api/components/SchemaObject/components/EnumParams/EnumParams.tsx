import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function EnumParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("enum"),
    {
      name: "values",
      types: ["any[]"],
      description: "Arreglo de valores que pueden ser escogidos",
      params: [],
      required: true,
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
