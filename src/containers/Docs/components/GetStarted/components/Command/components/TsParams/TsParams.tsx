import { useParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"
import useTsParams from "@modules/docs/hooks/useTsParams"

export default function TsParams() {
  const { ZIP_PARAM, INDENT, SEPARATE, SKIP_INVALID } = useParams()
  const { DECLARATION } = useTsParams()

  return <ExportParams params={[ZIP_PARAM, SKIP_INVALID, SEPARATE, INDENT, DECLARATION]} />
}
