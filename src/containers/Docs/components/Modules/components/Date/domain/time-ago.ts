import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const TIME_AGO_CODE = `
modules.date.timeAgo({ unit: 'days' }) // '20 days ago'
`

export const TIME_AGO_PARAMS: Param[] = [
  {
    name: "unit",
    description: { es: "Unidad de tiempo", en: "Time unit" },
    params: [],
    required: false,
    types: ["'years'", "'seconds'", "'minutes'", "'days'", "'hours'", "'months'"],
  },
]
