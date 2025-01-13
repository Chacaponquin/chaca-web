import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useYamlParams() {
  const LINE_WIDTH: Param = {
    name: "lineWidth",
    description: {
      es: "Máxima longitud que puede tener cada línea de código",
      en: "Maximum length that each line of code can have",
    },
    params: [],
    types: [COMMON_TYPES.NUMBER],
    default: "80",
    required: false,
  }

  return { LINE_WIDTH }
}
