import { ExportParams } from "../../shared/components"
import { useParams } from "@modules/docs/hooks"

export default function JavaParams() {
  const { ZIP_PARAM } = useParams()

  return <ExportParams params={[ZIP_PARAM]} />
}
