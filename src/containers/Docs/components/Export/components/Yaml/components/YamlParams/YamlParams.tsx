import { useParams, useYamlParams } from "@modules/docs/hooks"
import { MiniCode, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

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
      description: (
        <>
          Si es <MiniCode size="sm">true</MiniCode> se ordenarán las cabeceras en orden alfabético.
          Si se define como una función esta se utilizará para ordenar las cabeceras
        </>
      ),
      params: [],
      required: false,
      default: "false",
      types: ["(a, b) => number", COMMON_TYPES.BOOLEAN],
    },
  ]

  return <Params params={params} />
}
