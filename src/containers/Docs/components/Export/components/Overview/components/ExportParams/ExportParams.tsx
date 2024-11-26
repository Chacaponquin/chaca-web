import { FILE_CONFIG_PARAM } from "@containers/Docs/shared/domain/constants/file-config"
import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function ExportParams() {
  const params: Param[] = [
    { name: "data", description: "Datos a exportar", params: [], required: true, types: ["any"] },
    FILE_CONFIG_PARAM,
  ]

  return <Params params={params} />
}
