import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function EnumParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("enum"),
    {
      name: "values",
      types: ["any[]"],
      description: {
        es: "Arreglo de valores que pueden ser escogidos",
        en: "Array of values that can be chosen",
      },
      params: [],
      required: true,
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
