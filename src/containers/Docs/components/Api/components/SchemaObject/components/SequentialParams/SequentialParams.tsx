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
      description: "Arreglo de valores que se asignarán de forma secuencial",
      params: [
        {
          name: "loop",
          required: false,
          description: "Indica si la secuencia se reinicia al llegar al último valor",
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
