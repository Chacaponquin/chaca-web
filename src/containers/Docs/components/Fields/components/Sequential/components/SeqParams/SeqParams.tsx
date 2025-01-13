import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function SeqParams() {
  const params: Param[] = [
    {
      name: "values",
      description: { es: "Arreglo de valores a asignar", en: "Array of values to be assigned" },
      params: [],
      required: true,
      types: ["any[]"],
    },
    {
      name: "config",
      description: {
        es: "Configuración de la asignación de valores",
        en: "Value assignment configuration",
      },
      params: [
        {
          name: "loop",
          description: {
            es: "La asignación de valores se reiniciará al acabarse los valores del arreglo",
            en: "The values assignment will be restarted when the array runs out of values",
          },
          params: [],
          default: "false",
          required: false,
          types: [COMMON_TYPES.BOOLEAN],
        },
      ],
      required: false,
      types: ["SequentialFieldConfig"],
    },
  ]

  return <Params params={params} />
}
