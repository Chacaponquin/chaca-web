import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function SequenceParams() {
  const params: Param[] = [
    {
      name: "config",
      description: {
        es: "Configuración para la secuencia de valores",
        en: "Configuration for the sequence of values",
      },
      params: [
        {
          name: "startsWith",
          description: {
            es: "Valor con el que inicia la secuencia",
            en: "Sequence start value",
          },
          params: [],
          required: false,
          types: [COMMON_TYPES.NUMBER],
          default: "1",
        },
        {
          name: "step",
          description: {
            es: "Valor a incrementar en cada iteración",
            en: "Value to increment at each iteration",
          },
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
