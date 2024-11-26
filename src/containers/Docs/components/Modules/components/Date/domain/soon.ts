import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"
import { REF_DATE } from "../shared/domain/ref-date"

export const SOON_PARAMS: Param[] = [
  {
    name: "days",
    description: "Rango de días en los que se va a encontrar la fecha a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  REF_DATE,
]

export const SOON_CODE = `
modules.date.soon() // '2022-02-05T09:55:39.216Z'
modules.date.soon({ days: 10 }) // '2022-02-11T05:14:39.138Z'
`
