import { useParams, usePythonParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"

export default function PythonParams() {
  const { ZIP_PARAM, INDENT, SEPARATE, SKIP_INVALID } = useParams()
  const { DECLARATION } = usePythonParams()

  return <ExportParams params={[ZIP_PARAM, INDENT, SEPARATE, SKIP_INVALID, DECLARATION]} />
}
