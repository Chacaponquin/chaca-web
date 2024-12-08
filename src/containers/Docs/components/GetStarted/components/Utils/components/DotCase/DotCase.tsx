import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { DOT_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { ExternalLink, P } from "@markdown/components/Markdown/components"
import { TEXT_PARAM } from "../../shared/domain/text"

const code = `
chaca.utils.dotCase('Hello World') // 'hello.world'
chaca.utils.dotCase('hiFriend') // 'hi.friend'
`

export default function DotCase() {
  const URL = `https://titlecapitalize.com/text-to-dot-case/`

  const params: Param[] = [TEXT_PARAM]

  return (
    <Method code={code} params={params} title={DOT_CASE}>
      <P>
        Transforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={URL}>dot.case</ExternalLink>.
      </P>
    </Method>
  )
}
