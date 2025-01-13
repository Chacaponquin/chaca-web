import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const LANGUAGE_ARGUMENT: Param = {
  name: "language",
  description: { es: "Lenguage del cual se seleccionará el valor", en: "Value language" },
  required: false,
  params: [],
  types: ["'en'", "'es'"],
}
