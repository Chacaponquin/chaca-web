import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import useRefParams from "@modules/docs/hooks/useRefParams"
import { MiniCode, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function RefParams() {
  const { TYPE, COMMON_PARAMS } = useParams()
  const { FIELD_PARAM_DESCRIPTION, UNIQUE_PARAM_DESCRIPTION } = useRefParams()

  const params: Param[] = [
    TYPE("ref"),
    {
      name: "ref",
      description: FIELD_PARAM_DESCRIPTION,
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "unique",
      default: "false",
      description: UNIQUE_PARAM_DESCRIPTION,
      params: [],
      types: [COMMON_TYPES.BOOLEAN],
      required: false,
    },
    {
      name: "nullOnEmpty",
      description: {
        es: (
          <>
            Se devolverá <MiniCode size="sm">null</MiniCode> como resultado en caso de que no
            existan documentos a referenciar.
          </>
        ),
        en: (
          <>
            A <MiniCode size="sm">null</MiniCode> value will be returned if there are no documents
            to reference.
          </>
        ),
      },
      params: [],
      required: false,
      default: "false",
      types: [COMMON_TYPES.BOOLEAN],
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
