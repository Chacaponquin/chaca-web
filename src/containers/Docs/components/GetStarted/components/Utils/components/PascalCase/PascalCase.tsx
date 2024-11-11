import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { PASCAL_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { ExternalLink, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { TEXT_PARAM } from "../../shared/domain/text"

const code = `
chaca.utils.pascalCase('Hello World') // 'HelloWorld'
chaca.utils.pascalCase('hiFriend') // 'HiFriend'
`

export default function PascalCase() {
  const URL = `https://www.theserverside.com/definition/Pascal-case`

  const params: Param[] = [TEXT_PARAM]

  return (
    <Method code={code} params={params} title={PASCAL_CASE}>
      <P>
        Tranforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={URL}>pascal case</ExternalLink>.
      </P>
    </Method>
  )
}
