import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const BANNED: Param = {
  name: "banned",
  description: {
    es: "Caracteres o números que no pueden ser escogidos para generar el valor",
    en: "Characters or numbers that cannot be chosen to generate the value",
  },
  params: [],
  required: false,
  types: [COMMON_TYPES.STRING, COMMON_TYPES.ARRAY_STRING],
}
