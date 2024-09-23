import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function ProbParams() {
  const params: Param[] = [
    {
      name: "options",
      description: "Configuración de los valores posibles",
      params: [
        {
          name: "chance",
          description: "Probabilidad de que el valor sea seleccionado",
          params: [],
          required: true,
          types: ["Chance = number | ChanceFunction"],
        },
        {
          name: "value",
          types: ["any"],
          description: "Valor que puede ser seleccionado",
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
