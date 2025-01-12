import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function SequentialParams() {
  const { TYPE } = useParams()

  const params: Param[] = [
    TYPE("sequential"),
    {
      name: "values",
      description: {
        es: "Arreglo de valores que se asignarán de forma secuencial",
        en: "Array of values to be assigned sequentially",
      },
      params: [
        {
          name: "loop",
          required: false,
          description: {
            es: "Indica si la secuencia se reinicia al llegar al último valor",
            en: "Indicates if the sequence restarts when the last value is reached",
          },
          params: [],
          types: [COMMON_TYPES.BOOLEAN],
          default: "false",
        },
      ],
      required: true,
      types: ["any[]"],
    },
  ]

  return <Params params={params} />
}
