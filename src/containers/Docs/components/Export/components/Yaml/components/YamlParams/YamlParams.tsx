import { useParams, useYamlParams } from "@modules/docs/hooks"
import { MiniCode, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function YamlParams() {
  const { EXT, ZIP_PARAM, SEPARATE, INDENT } = useParams()
  const { LINE_WIDTH } = useYamlParams()

  const params: Param[] = [
    EXT("yaml"),
    ZIP_PARAM,
    SEPARATE,
    INDENT,
    LINE_WIDTH,
    {
      name: "sortKeys",
      description: {
        es: (
          <>
            Si es <MiniCode size="sm">true</MiniCode> se ordenarán las cabeceras en orden
            alfabético. Si se define como una función esta se utilizará para ordenar las cabeceras
          </>
        ),
        en: (
          <>
            If <MiniCode size="sm">true</MiniCode> the headers will be sorted alphabetically. If
            defined as a function this will be used to sort the headers
          </>
        ),
      },
      params: [],
      required: false,
      default: "false",
      types: ["(a, b) => number", COMMON_TYPES.BOOLEAN],
    },
  ]

  return <Params params={params} />
}
