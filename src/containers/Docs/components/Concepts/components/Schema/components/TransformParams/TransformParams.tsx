import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COUNT_PARAM } from "../../domain/count"
import { useExportParams } from "@containers/Docs/shared/hooks"

export default function TransformParams() {
  const { DUMP_CONFIG_PARAM } = useExportParams()

  const params: Param[] = [COUNT_PARAM, DUMP_CONFIG_PARAM]

  return <Params params={params} />
}
