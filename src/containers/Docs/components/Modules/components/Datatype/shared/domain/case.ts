import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const CASE: Param = {
  name: "case",
  description: "Tamaño de los caracteres dentro de la cadena de texto",
  params: [],
  required: false,
  types: ["'upper'", "'lower'", "'mixed'"],
  default: "'mixed'",
}
