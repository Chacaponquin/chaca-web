import { useCsvParams, useParams } from "@modules/docs/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

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
  ]

  return <Params params={params} />
}
