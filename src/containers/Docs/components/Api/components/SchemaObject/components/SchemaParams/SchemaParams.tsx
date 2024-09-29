import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function SchemaParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("schema"),
    {
      name: "fields",
      description: "Objeto con la definición de los campos para el schema",
      types: ["Record<string, FieldConfig>"],
      params: [],
      required: true,
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
