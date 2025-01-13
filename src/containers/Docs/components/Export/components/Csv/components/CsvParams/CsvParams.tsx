import { useCsvParams, useParams } from "@modules/docs/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function CsvParams() {
  const { ZIP_PARAM, EXT } = useParams()
  const {
    EXPAND_ARRAY_OBJECTS,
    EXPAND_NESTED_OBJECTS,
    SORT_HEADER,
    TRIM_FIELDS_DESC,
    TRIM_HEADERS_DESC,
    UNWIND_ARRAYS,
  } = useCsvParams()

  const params: Param[] = [
    EXT("csv"),
    ZIP_PARAM,
    EXPAND_ARRAY_OBJECTS,
    EXPAND_NESTED_OBJECTS,
    SORT_HEADER,
    UNWIND_ARRAYS,
    {
      name: "excludeKeys",
      description: {
        es: "Campos que van a ser eliminados del resultado final",
        en: "Fields to be removed from the final result",
      },
      params: [],
      required: false,
      default: "[]",
      types: [COMMON_TYPES.ARRAY_STRING],
    },
    {
      name: "trim",
      types: ["TrimProps"],
      description: {
        es: "Configuración para la eliminación de espacios en cabeceras y valores",
        en: "Removing spaces in headers and values configuration",
      },
      params: [
        {
          description: TRIM_FIELDS_DESC,
          name: "field",
          types: [COMMON_TYPES.BOOLEAN],
          default: "false",
          params: [],
          required: false,
        },
        {
          description: TRIM_HEADERS_DESC,
          name: "header",
          types: [COMMON_TYPES.BOOLEAN],
          default: "false",
          params: [],
          required: false,
        },
      ],
      required: false,
    },
    {
      name: "delimiters",
      types: ["Delimiters"],
      description: {
        es: "Configuración de los caracteres que delimitan los valores del CSV",
        en: "Configuration of characters that delimit CSV values",
      },
      params: [
        {
          name: "field",
          description: {
            es: "Delimitador para cada valor de una columna",
            en: "Delimiter for each value in a column",
          },
          params: [],
          required: false,
          default: "','",
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "eol",
          description: {
            es: "Delimitador que se ubica al final de cada fila",
            en: "Delimiter that is placed at the end of each row",
          },
          params: [],
          required: false,
          default: "\\n",
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "wrap",
          description: {
            es: "Envuelve los valores del delimitador de elección",
            en: "Wraps the values of the choice delimiter",
          },
          params: [],
          required: false,
          default: '"',
          types: [COMMON_TYPES.STRING],
        },
      ],
      required: false,
    },
    {
      name: "parseValue",
      description: {
        es: "Función que transforma los valores a formato CSV",
        en: "Function that transforms values into CSV format",
      },
      params: [],
      required: false,
      types: ["(value: any, defaultParser: (v: any) => string) => string"],
    },
    {
      name: "keys",
      description: {
        es: "Llaves que serán transformadas en el resultado final",
        en: "Keys that will be transformed into the final result",
      },
      params: [
        {
          name: "field",
          description: { es: "Ruta del campo", en: "Field route" },
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "title",
          description: {
            es: "Nombre de la cabecera que tendrá en CSV",
            en: "Name of the header that will be in CSV",
          },
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
      ],
      required: false,
      types: ["KeyConverter[]"],
      default: "[]",
    },
  ]

  return <Params params={params} />
}
