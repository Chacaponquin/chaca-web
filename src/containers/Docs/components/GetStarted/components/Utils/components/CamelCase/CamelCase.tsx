import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { CAMEL_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { ExternalLink, P } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
chaca.utils.camelCase('Hello World') // 'helloWorld'
chaca.utils.camelCase('hiFriend') // 'hiFriend'
`

export default function CamelCase() {
  const CAMEL_CASE_URL = `https://en.wikipedia.org/wiki/Camel_case`

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
    <Method code={code} params={params} title={CAMEL_CASE}>
      <P>
        Tranforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={CAMEL_CASE_URL}>camel case</ExternalLink>.
      </P>
    </Method>
  )
}
