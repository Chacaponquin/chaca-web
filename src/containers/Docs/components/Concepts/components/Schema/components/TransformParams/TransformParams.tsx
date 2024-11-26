import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COUNT_PARAM } from "../../domain/count"
import { DUMP_CONFIG_PARAM } from "@containers/Docs/shared/domain/constants/file-config"

export default function TransformParams() {
  const params: Param[] = [COUNT_PARAM, DUMP_CONFIG_PARAM]

  return <Params params={params} />
}
