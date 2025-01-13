import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function EnumParams() {
  const params: Param[] = [
    {
      name: "values",
      types: ["any[]"],
      description: {
        es: "Valores que pueden ser seleccionados",
        en: "Values that can be selected",
      },
      params: [],
      required: true,
    },
  ]

  return <Params params={params} />
}
