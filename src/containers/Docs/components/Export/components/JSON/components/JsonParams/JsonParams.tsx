import { useParams } from "@modules/docs/hooks"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function JsonParams() {
  const { ZIP_PARAM, EXT, SEPARATE, INDENT } = useParams()

  const params: Param[] = [EXT("json"), ZIP_PARAM, SEPARATE, INDENT]

  return <Params params={params} />
}
