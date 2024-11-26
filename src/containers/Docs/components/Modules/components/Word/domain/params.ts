import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const COMMON_PARAMS: Param[] = [
  {
    name: "language",
    description: "Idioma al que pertenece la palabra",
    params: [],
    required: false,
    types: ["'en'", "'es'"],
    default: "'en'",
  },
]
