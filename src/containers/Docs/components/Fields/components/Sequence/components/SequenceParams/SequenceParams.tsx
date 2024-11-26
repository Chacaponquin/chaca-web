import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function SequenceParams() {
  const params: Param[] = [
    {
      name: "config",
      description: "Configuración para la secuencia de valores",
      params: [
        {
          name: "startsWith",
          description: "Valor con el que inicia la secuencia",
          params: [],
          required: false,
          types: [COMMON_TYPES.NUMBER],
          default: "1",
        },
        {
          name: "step",
          description: "Valor a incrementar en cada iteración",
          params: [],
          required: false,
          types: [COMMON_TYPES.NUMBER],
          default: "1",
        },
      ],
      required: false,
      types: ["SequenceFieldProps"],
    },
  ]

  return <Params params={params} />
}
