import { useParams } from "@modules/docs/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function PostgresParams() {
  const { EXT, ZIP_PARAM } = useParams()

  const params: Param[] = [EXT("postgresql"), ZIP_PARAM]

  return <Params params={params} />
}
