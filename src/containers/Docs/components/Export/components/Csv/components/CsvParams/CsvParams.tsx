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
      description: "Campos que van a ser eliminados del resultado final",
      params: [],
      required: false,
      default: "[]",
      types: [COMMON_TYPES.ARRAY_STRING],
    },
    {
      name: "trim",
      types: ["TrimProps"],
      description: "Configuración para la eliminación de espacios en cabeceras y valores",
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
      description: "Configuración de los caracteres que delimitan los valores del CSV",
      params: [
        {
          name: "field",
          description: "Delimitador para cada valor de una columna",
          params: [],
          required: false,
          default: "','",
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "eol",
          description: "Delimitador que se ubica al final de cada fila",
          params: [],
          required: false,
          default: "\\n",
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "wrap",
          description: "Envuelve los valores del delimitador de elección",
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
      description: "Función que transforma los valores a formato CSV",
      params: [],
      required: false,
      types: ["(value: any, defaultParser: (v: any) => string) => string"],
    },
    {
      name: "keys",
      description: "Llaves que serán transformadas en el resultado final",
      params: [
        {
          name: "field",
          description: "Ruta del campo",
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "title",
          description: "Nombre de la cabecera que tendrá en CSV",
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
