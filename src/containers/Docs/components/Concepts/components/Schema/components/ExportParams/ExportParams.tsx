import { FILE_CONFIG_PARAM } from "@containers/Docs/shared/domain/constants/file-config"
import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function ExportParams() {
  const params: Param[] = [
    {
      name: "documents",
      description: "Cantidad de documentos a generar",
      params: [],
      required: true,
      types: [COMMON_TYPES.NUMBER],
    },
    FILE_CONFIG_PARAM,
  ]

  return <Params params={params} />
}
