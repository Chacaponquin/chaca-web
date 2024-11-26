import { DUMP_CONFIG_PARAM } from "@containers/Docs/shared/domain/constants/file-config"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformParams() {
  return <Params params={[DUMP_CONFIG_PARAM]} />
}
