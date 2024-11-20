import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { ExportParams } from "../../shared/components"
import { useCsvParams, useParams } from "@modules/docs/hooks"

export default function CsvParams() {
  const { ZIP_PARAM } = useParams()
  const {
    EXPAND_ARRAY_OBJECTS,
    EXPAND_NESTED_OBJECTS,
    SORT_HEADER,
    TRIM_FIELDS_DESC,
    TRIM_HEADERS_DESC,
    UNWIND_ARRAYS,
  } = useCsvParams()

  return (
    <ExportParams
      params={[
        ZIP_PARAM,
        UNWIND_ARRAYS,
        EXPAND_ARRAY_OBJECTS,
        EXPAND_NESTED_OBJECTS,
        SORT_HEADER,
        {
          name: "trimFields",
          description: TRIM_FIELDS_DESC,
          params: [],
          required: false,
          default: "false",
          types: [COMMON_TYPES.BOOLEAN],
        },
        {
          name: "trimHeaders",
          description: TRIM_HEADERS_DESC,
          params: [],
          required: false,
          default: "false",
          types: [COMMON_TYPES.BOOLEAN],
        },
      ]}
    />
  )
}
