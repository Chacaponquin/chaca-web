import { useParams, usePythonParams } from "@modules/docs/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function PythonParams() {
  const { EXT, ZIP_PARAM, INDENT, SEPARATE, SKIP_INVALID } = useParams()
  const { DECLARATION } = usePythonParams()

  const params: Param[] = [EXT("python"), ZIP_PARAM, DECLARATION, INDENT, SEPARATE, SKIP_INVALID]

  return <Params params={params} />
}
