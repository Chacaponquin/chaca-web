import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function useYamlParams() {
  const LINE_WIDTH: Param = {
    name: "lineWidth",
    description: "Máxima longitud que puede tener cada línea de código",
    params: [],
    types: [COMMON_TYPES.NUMBER],
    default: "80",
    required: false,
  }

  return { LINE_WIDTH }
}
