import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { Method } from "../../shared/components"
import { P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { CAPITALIZE_WORD } from "@modules/docs/domain/core/sections/get-started/utils"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

const code = `
chaca.utils.capitalizeWord('hello') // 'Hello'
chaca.utils.capitalizeWord('hi there') // 'Hi there'
`

export default function CapitalizeWord() {
  const params: Param[] = [
    {
      name: "word",
      description: "Palabra a tranformar",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return (
    <Method code={code} params={params} title={CAPITALIZE_WORD}>
      <P>Convierte la primera letra de una palabra en mayúscula.</P>
    </Method>
  )
}
