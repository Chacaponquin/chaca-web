import { useParams, usePostgresParams } from "@modules/docs/hooks"
import { MiniCode, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

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
      name: "refs",
      description: {
        es: (
          <>
            Columnas que serán definidas como <MiniCode size="sm">FOREIGN KEY</MiniCode>
          </>
        ),
        en: (
          <>
            Columns that will be defined as <MiniCode size="sm">FOREIGN KEY</MiniCode>
          </>
        ),
      },
      params: [
        {
          name: "column",
          description: { es: "Ruta de la columna a modificar", en: "Column path to modify" },
          required: true,
          params: [],
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "ref",
          description: {
            es: "Ruta de la columna a la que referencia",
            en: "Column path which refers",
          },
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
      ],
      required: false,
      default: "[]",
      types: ["RefColumnParser[]"],
    },
    {
      name: "keys",
      description: {
        es: (
          <>
            Arreglo con la ruta de los campos que tendrán la etiqueta{" "}
            <MiniCode>PRIMARY KEY</MiniCode> en la definición de tablas
          </>
        ),
        en: (
          <>
            Array that contains the field paths that will have the label{" "}
            <MiniCode>PRIMARY KEY</MiniCode> in the table definition
          </>
        ),
      },
      default: "[]",
      params: [],
      required: false,
      types: [COMMON_TYPES.ARRAY_STRING],
    },
    {
      name: "nulls",
      description: {
        es: (
          <>
            Arreglo con la ruta de los campos que no tendrán la etiqueta{" "}
            <MiniCode>NOT NULL</MiniCode> en la definición de tablas
          </>
        ),
        en: (
          <>
            Array that containts the field paths that will not have the{" "}
            <MiniCode>NOT NULL</MiniCode> tag in the table definition
          </>
        ),
      },
      default: "[]",
      params: [],
      required: false,
      types: [COMMON_TYPES.ARRAY_STRING],
    },
    {
      name: "uniques",
      description: {
        es: (
          <>
            Arreglo con la ruta de los campos que tendrán la etiqueta <MiniCode>UNIQUE</MiniCode> en
            la definición de tablas
          </>
        ),
        en: (
          <>
            Array that contains the field paths that will not have the <MiniCode>NOT NULL</MiniCode>{" "}
            tag in the table definition
          </>
        ),
      },
      default: "[]",
      params: [],
      required: false,
      types: [COMMON_TYPES.ARRAY_STRING],
    },
  ]

  return <Params params={params} />
}
