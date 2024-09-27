import { useParams } from "@containers/Docs/components/Export/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function JavaParams() {
  const { EXT, ZIP_PARAM } = useParams()

  const params: Param[] = [EXT("java"), ZIP_PARAM]

  return <Params params={params} />
}
