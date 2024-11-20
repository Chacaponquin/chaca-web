import { useParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"

export default function PythonParams() {
  const { ZIP_PARAM, DECLARATION_ONLY, INDENT, SEPARATE, SKIP_INVALID } = useParams()

  return (
    <ExportParams
      params={[
        ZIP_PARAM,
        INDENT,
        SEPARATE,
        SKIP_INVALID,
        DECLARATION_ONLY("Solo serán declaradas las clases de cada objeto"),
      ]}
    />
  )
}
