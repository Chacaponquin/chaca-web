import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const COUNTRY_CODE = `
modules.address.country() // 'Spain'
`

export const COUNTRY_PARAMS: Param[] = [
  {
    name: "continent",
    description: { es: "Continente del país", en: "Country continent" },
    params: [],
    required: false,
    types: [
      "'Asia'",
      "'Africa'",
      "'Oseania'",
      "'Europe'",
      "'South America'",
      "'North America'",
      "'Antartica'",
    ],
  },
]
