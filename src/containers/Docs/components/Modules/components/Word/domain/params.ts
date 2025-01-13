import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const COMMON_PARAMS: Param[] = [
  {
    name: "language",
    description: { es: "Idioma al que pertenece la palabra", en: "Word language" },
    params: [],
    required: false,
    types: ["'en'", "'es'"],
    default: "'en'",
  },
]
