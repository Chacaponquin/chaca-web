import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const CASE: Param = {
  name: "case",
  description: {
    es: "Tamaño de los caracteres dentro de la cadena de texto",
    en: "Characters case inside the string",
  },
  params: [],
  required: false,
  types: ["'upper'", "'lower'", "'mixed'"],
  default: "'mixed'",
}
