import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { CAMEL_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { ExternalLink, P } from "@markdown/components/Markdown/components"
import { TEXT_PARAM } from "../../shared/domain/text"

const code = `
chaca.utils.camelCase('Hello World') // 'helloWorld'
chaca.utils.camelCase('hiFriend') // 'hiFriend'
`

export default function CamelCase() {
  const URL = `https://en.wikipedia.org/wiki/Camel_case`

  const params: Param[] = [TEXT_PARAM]

  return (
    <Method code={code} params={params} title={CAMEL_CASE}>
      <P>
        Transforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={URL}>camelCase</ExternalLink>.
      </P>
    </Method>
  )
}
