import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function SequenceParams() {
  const { TYPE, COMMON_PARAMS, IS_KEY_PARAM } = useParams()

  const params: Param[] = [
    TYPE("sequence"),
    IS_KEY_PARAM,
    {
      name: "startsWith",
      description: {
        es: "Valor con el que inicia la secuencia numérica",
        en: "The numerical sequence begins with this value",
      },
      params: [],
      required: false,
      types: [COMMON_TYPES.NUMBER],
      default: "1",
    },
    {
      name: "step",
      description: {
        es: "Valor que se le suma a la secuencia al generar un documento",
        en: "Value added to the sequence when generating a document",
      },
      params: [],
      required: false,
      types: [COMMON_TYPES.NUMBER],
      default: "1",
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
