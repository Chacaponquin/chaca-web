import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { REF_DATE } from "../shared/domain/ref-date"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const BIRTHDATE_CODE = `
modules.date.birthdate() // 1977-07-10T01:37:30.719Z
modules.date.birthdate({ min: 18, max: 65, mode: 'age' }) // 2003-11-02T20:03:20.116Z
modules.date.birthdate({ min: 1900, max: 2000, mode: 'year' }) // 1940-08-20T08:53:07.538Z
`

export const BIRTHDATE_PARAMS: Param[] = [
  REF_DATE,
  {
    name: "min",
    description: "Límite inferior para el rango de edad o años de la fecha a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "max",
    description: "Límite superior para el rango de edad o años de la fecha a generar",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "mode",
    description:
      "Valor que indica si los límites serán considerados como edad de la persona o años",
    params: [],
    required: false,
    types: ["'age'", "'year'"],
    default: "'age'",
  },
]
