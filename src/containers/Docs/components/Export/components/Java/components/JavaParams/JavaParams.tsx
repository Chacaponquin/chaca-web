import { useJavaParams, useParams } from "@modules/docs/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function JavaParams() {
  const { EXT, ZIP_PARAM, INDENT, SKIP_INVALID } = useParams()
  const { DECLARATION, PACKAGE } = useJavaParams()

  const params: Param[] = [EXT("java"), ZIP_PARAM, DECLARATION, INDENT, SKIP_INVALID, PACKAGE]

  return <Params params={params} />
}
