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
    description: {
      es: "Límite inferior para el rango de edad o años de la fecha a generar",
      en: "Lower limit for the age or years range of the date",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "max",
    description: {
      es: "Límite superior para el rango de edad o años de la fecha a generar",
      en: "Upper limit for the age or years range of the date",
    },
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
  {
    name: "mode",
    description: {
      es: "Los límites serán considerados como edad de la persona o años",
      en: "The limits will be considered as the person's age or years",
    },
    params: [],
    required: false,
    types: ["'age'", "'year'"],
    default: "'age'",
  },
]
