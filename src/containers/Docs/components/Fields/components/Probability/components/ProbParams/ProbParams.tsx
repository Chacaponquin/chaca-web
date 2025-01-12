import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function ProbParams() {
  const params: Param[] = [
    {
      name: "options",
      description: {
        es: "Configuración de los valores a escoger",
        en: "Values to choose configuration",
      },
      params: [
        {
          name: "chance",
          description: {
            es: "Probabilidad de que el valor sea seleccionado",
            en: "Probability of the value being selected",
          },
          params: [],
          required: true,
          types: ["Chance = number | ChanceFunction"],
        },
        {
          name: "value",
          types: ["any"],
          description: { es: "Valor que puede ser seleccionado", en: "Value that can be selected" },
          params: [],
          required: true,
        },
      ],
      required: true,
      types: ["ProbabilityOption[]"],
    },
  ]

  return <Params params={params} />
}
