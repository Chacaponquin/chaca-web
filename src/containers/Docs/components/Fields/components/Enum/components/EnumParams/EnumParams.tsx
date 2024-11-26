import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function EnumParams() {
  const params: Param[] = [
    {
      name: "values",
      types: ["any[]"],
      description: "Valores que pueden ser seleccionados",
      params: [],
      required: true,
    },
  ]

  return <Params params={params} />
}
