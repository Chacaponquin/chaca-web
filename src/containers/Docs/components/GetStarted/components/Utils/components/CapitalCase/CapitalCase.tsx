import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { CAPITAL_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { ExternalLink, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { TEXT_PARAM } from "../../shared/domain/text"

const code = `
chaca.utils.capitalCase('Hello World') // 'Hello World'
chaca.utils.capitalCase('hiFriend') // 'Hi Friend'
`

export default function CapitalCase() {
  const URL = `https://www.law.cornell.edu/wex/capital_case`

  const params: Param[] = [TEXT_PARAM]

  return (
    <Method code={code} params={params} title={CAPITAL_CASE}>
      <P>
        Tranforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={URL}>capital case</ExternalLink>.
      </P>
    </Method>
  )
}
