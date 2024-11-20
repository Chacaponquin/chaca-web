import { useParams } from "@modules/docs/hooks"
import useTsParams from "@modules/docs/hooks/useTsParams"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function TsParams() {
  const { EXT, ZIP_PARAM, SEPARATE, INDENT, SKIP_INVALID } = useParams()
  const { DECLARATION } = useTsParams()

  const params: Param[] = [
    EXT("typescript"),
    ZIP_PARAM,
    DECLARATION,
    SEPARATE,
    INDENT,
    SKIP_INVALID,
  ]

  return <Params params={params} />
}
