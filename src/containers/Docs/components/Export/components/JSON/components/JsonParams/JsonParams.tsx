import { useParams } from "@containers/Docs/components/Export/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function JsonParams() {
  const { ZIP_PARAM, EXT } = useParams()

  const params: Param[] = [EXT("json"), ZIP_PARAM]

  return <Params params={params} />
}
