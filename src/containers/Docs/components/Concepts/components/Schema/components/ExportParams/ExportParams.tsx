import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COUNT_PARAM } from "../../domain/count"
import { useExportParams } from "@containers/Docs/shared/hooks"

export default function ExportParams() {
  const { FILE_CONFIG_PARAM } = useExportParams()

  const params: Param[] = [COUNT_PARAM, FILE_CONFIG_PARAM]

  return <Params params={params} />
}
