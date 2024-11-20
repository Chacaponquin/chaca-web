import { useParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"

export default function JsParams() {
  const { ZIP_PARAM, SEPARATE, INDENT, SKIP_INVALID } = useParams()

  return <ExportParams params={[ZIP_PARAM, SEPARATE, INDENT, SKIP_INVALID]} />
}
