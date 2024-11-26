import { FILE_CONFIG_PARAM } from "@containers/Docs/shared/domain/constants/file-config"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COUNT_PARAM } from "../../domain/count"

export default function ExportParams() {
  const params: Param[] = [COUNT_PARAM, FILE_CONFIG_PARAM]

  return <Params params={params} />
}
