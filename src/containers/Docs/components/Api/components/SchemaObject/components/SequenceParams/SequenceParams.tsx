import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function SequenceParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("sequence"),
    {
      name: "startsWith",
      description: "Valor con el que inicia la secuencia numérica",
      params: [],
      required: false,
      types: [COMMON_TYPES.NUMBER],
      default: "1",
    },
    {
      name: "step",
      description: "Valor que se le suma a la secuencia al generar un documento",
      params: [],
      required: false,
      types: [COMMON_TYPES.NUMBER],
      default: "1",
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
