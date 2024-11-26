import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function SeqParams() {
  const params: Param[] = [
    {
      name: "values",
      description: "Arreglo de valores a asignar ",
      params: [],
      required: true,
      types: ["any[]"],
    },
    {
      name: "config",
      description: "Configuración de la asignación de valores",
      params: [
        {
          name: "loop",
          description:
            "Indica si la asignación de valores se reiniciará al acabarse los valores del arreglo",
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
