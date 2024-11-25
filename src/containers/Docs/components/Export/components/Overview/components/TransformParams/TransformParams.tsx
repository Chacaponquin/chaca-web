import { DUMP_CONFIG_PARAM } from "@containers/Docs/shared/domain/constants/file-config"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function TransformParams() {
  const params: Param[] = [
    { name: "data", description: "Datos a transpilar", params: [], required: true, types: ["any"] },
    DUMP_CONFIG_PARAM,
  ]

  return <Params params={params} />
}
