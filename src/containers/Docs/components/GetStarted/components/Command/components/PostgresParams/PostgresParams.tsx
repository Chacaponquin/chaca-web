import { useParams, usePostgresParams } from "@modules/docs/hooks"
import { ExportParams } from "../../shared/components"

export default function PostgresParams() {
  const { ZIP_PARAM, SKIP_INVALID } = useParams()
  const { DECLARATION, GENERATE_IDS } = usePostgresParams()

  return <ExportParams params={[ZIP_PARAM, SKIP_INVALID, DECLARATION, GENERATE_IDS]} />
}
