import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function PickParams() {
  const params: Param[] = [
    {
      name: "props",
      description: {
        es: "Configuración para la selección de valores",
        en: "Pick values configuration",
      },
      params: [
        {
          name: "values",
          description: {
            es: "Valores que pueden ser seleccionados",
            en: "Values that can be selected",
          },
          params: [],
          required: true,
          types: ["any[]"],
        },
        {
          name: "count",
          description: {
            es: "Cantidad de valores que pueden ser seleccionados",
            en: "Count of values that can be selected",
          },
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
