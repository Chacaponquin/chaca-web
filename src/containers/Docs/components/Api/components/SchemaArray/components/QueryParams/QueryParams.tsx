import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function QueryParams() {
  const params: Param[] = [
    {
      name: "count",
      description: "Cantidad de documentos a crear",
      params: [],
      required: true,
      types: [COMMON_TYPES.NUMBER],
    },
  ]

  return <Params params={params} />
}
