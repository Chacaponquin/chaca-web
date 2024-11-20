import { useParams } from "@modules/docs/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function JsParams() {
  const { EXT, ZIP_PARAM, SEPARATE, INDENT, SKIP_INVALID } = useParams()

  const params: Param[] = [EXT("javascript"), ZIP_PARAM, SEPARATE, INDENT, SKIP_INVALID]

  return <Params params={params} />
}
