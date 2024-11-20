import { useParams, usePostgresParams } from "@modules/docs/hooks"
import { MiniCode, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function PostgresParams() {
  const { EXT, ZIP_PARAM, INDENT, SKIP_INVALID } = useParams()
  const { DECLARATION, GENERATE_IDS } = usePostgresParams()

  const params: Param[] = [
    EXT("postgresql"),
    ZIP_PARAM,
    INDENT,
    SKIP_INVALID,
    DECLARATION,
    GENERATE_IDS,
    {
      name: "keys",
      description: (
        <>
          Arreglo con la ruta de los campos que tendrán la etiqueta <MiniCode>PRIMARY KEY</MiniCode>{" "}
          en la definición de tablas
        </>
      ),
      default: "[]",
      params: [],
      required: false,
      types: [COMMON_TYPES.ARRAY_STRING],
    },
    {
      name: "nulls",
      description: (
        <>
          Arreglo con la ruta de los campos que no tendrán la etiqueta <MiniCode>NOT NULL</MiniCode>{" "}
          en la definición de tablas
        </>
      ),
      default: "[]",
      params: [],
      required: false,
      types: [COMMON_TYPES.ARRAY_STRING],
    },
    {
      name: "uniques",
      description: (
        <>
          Arreglo con la ruta de los campos que tendrán la etiqueta <MiniCode>UNIQUE</MiniCode> en
          la definición de tablas
        </>
      ),
      default: "[]",
      params: [],
      required: false,
      types: [COMMON_TYPES.ARRAY_STRING],
    },
  ]

  return <Params params={params} />
}
