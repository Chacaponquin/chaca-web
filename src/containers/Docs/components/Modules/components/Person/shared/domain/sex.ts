import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const SEX_ARGUMENT: Param = {
  name: "sex",
  description: { es: "Sexo de la persona", en: "Person sex" },
  params: [],
  required: false,
  types: ["'female'", "'male'"],
}
