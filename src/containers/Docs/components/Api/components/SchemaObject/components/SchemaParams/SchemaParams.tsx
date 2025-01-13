import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function SchemaParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("schema"),
    {
      name: "fields",
      description: {
        es: "Objeto con la definición de los campos para el schema",
        en: "Object with the definition schema fields definition",
      },
      types: ["Record<string, FieldConfig>"],
      params: [],
      required: true,
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
