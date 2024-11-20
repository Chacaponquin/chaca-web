import { ExportParams } from "../../shared/components"
import { useJavaParams, useParams } from "@modules/docs/hooks"

export default function JavaParams() {
  const { ZIP_PARAM, INDENT, SKIP_INVALID } = useParams()
  const { DECLARATION, PACKAGE } = useJavaParams()

  return <ExportParams params={[ZIP_PARAM, INDENT, SKIP_INVALID, DECLARATION, PACKAGE]} />
}
