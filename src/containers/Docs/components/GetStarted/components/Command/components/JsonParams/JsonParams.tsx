import { useParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"

export default function JsonParams() {
  const { ZIP_PARAM, SEPARATE, INDENT } = useParams()

  return <ExportParams params={[ZIP_PARAM, SEPARATE, INDENT]} />
}
