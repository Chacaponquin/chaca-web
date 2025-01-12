import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function Structure() {
  const params: Param[] = [
    {
      name: "file",
      description: { es: "Nombre del archivo", en: "File name" },
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "code",
      description: { es: "Código generado", en: "Generated code" },
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return <Params params={params} />
}
