import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function PickParams() {
  const params: Param[] = [
    {
      name: "props",
      description: "Configuración para la selección de valores",
      params: [
        {
          name: "values",
          description: "Valores que pueden ser seleccionados",
          params: [],
          required: true,
          types: ["any[]"],
        },
        {
          name: "count",
          description: "Cantidad de valores que pueden ser seleccionados",
          params: [],
          required: true,
          types: ["PickCount = number | PickCountLimits | PickCountFunction"],
        },
      ],
      required: true,
      types: ["PickFieldProps"],
    },
  ]

  return <Params params={params} />
}
