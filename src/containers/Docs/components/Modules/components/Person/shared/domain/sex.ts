import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export const SEX_ARGUMENT: Param = {
  name: "sex",
  description: "Sexo de la persona",
  params: [],
  required: false,
  types: ["'female'", "'male'"],
}
