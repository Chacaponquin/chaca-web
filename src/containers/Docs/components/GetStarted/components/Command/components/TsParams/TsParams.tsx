import { useParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"

export default function TsParams() {
  const { ZIP_PARAM } = useParams()

  return <ExportParams params={[ZIP_PARAM]} />
}
