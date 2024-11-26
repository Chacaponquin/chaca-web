import { useParams, useYamlParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function YamlParams() {
  const { ZIP_PARAM, SEPARATE, INDENT } = useParams()
  const { LINE_WIDTH } = useYamlParams()

  return (
    <ExportParams
      params={[
        ZIP_PARAM,
        SEPARATE,
        INDENT,
        LINE_WIDTH,
        {
          name: "sortKeys",
          description: "Organiza las llaves de los objetos a crear en orden alfabético",
          params: [],
          required: false,
          types: [COMMON_TYPES.BOOLEAN],
          default: "false",
        },
      ]}
    />
  )
}
