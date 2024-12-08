import { useExportParams } from "@containers/Docs/shared/hooks"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformParams() {
  const { DUMP_CONFIG_PARAM } = useExportParams()

  return <Params params={[DUMP_CONFIG_PARAM]} />
}
