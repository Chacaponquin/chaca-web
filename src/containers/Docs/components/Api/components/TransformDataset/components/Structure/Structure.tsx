import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function Structure() {
  const params: Param[] = [
    {
      name: "file",
      description: "Nombre del archivo",
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "code",
      description: "Código generado",
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return <Params params={params} />
}
