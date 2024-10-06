import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { Method } from "../../shared/components"
import { P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { CAPITALIZE } from "@modules/docs/domain/core/sections/get-started/utils"

const code = `
chaca.utils.capitalize('hi there friend') // 'Hi There Friend'
chaca.utils.capitalize(' helloWorld') // ' HelloWorld'
`

export default function Capitalize() {
  const params: Param[] = [
    {
      name: "text",
      description: "Cadena de texto a transformar",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return (
    <Method params={params} title={CAPITALIZE} code={code}>
      <P>Convierte en mayúscula la primera letra de todas las palabras en una cadena de texto.</P>
    </Method>
  )
}
