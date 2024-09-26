import { useParams } from "@containers/Docs/components/Export/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function PythonParams() {
  const { EXT, ZIP_PARAM } = useParams()

  const params: Param[] = [EXT("python"), ZIP_PARAM]

  return <Params params={params} />
}
