import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const EMOJI_CODE = `
modules.internet.emoji() // '🔎'
`

export const EMOJI_PARAMS: Param[] = [
  {
    name: "emoji",
    required: false,
    description: "Categoría",
    params: [],
    types: [
      "'smiley'",
      "'body'",
      "'person'",
      "'nature'",
      "'food'",
      "'travel'",
      "'activity'",
      "'object'",
      "'symbol'",
    ],
  },
]
