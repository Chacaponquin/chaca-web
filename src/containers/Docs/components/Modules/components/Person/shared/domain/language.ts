import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export const LANGUAGE_ARGUMENT: Param = {
  name: "language",
  description: "Lenguage del cual se seleccionará el valor",
  required: false,
  params: [],
  types: ["'en'", "'es'"],
}
