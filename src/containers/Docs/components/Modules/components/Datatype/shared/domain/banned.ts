import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const BANNED: Param = {
  name: "banned",
  description: "Caracteres o números que no pueden ser escogidos para generar el valor",
  params: [],
  required: false,
  types: [COMMON_TYPES.STRING, COMMON_TYPES.ARRAY_STRING],
}
