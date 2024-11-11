import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { SNAKE_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { ExternalLink, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { TEXT_PARAM } from "../../shared/domain/text"

const code = `
chaca.utils.snakeCase('Hello World') // 'hello_world'
chaca.utils.snakeCase('hiFriend') // 'hi_friend'
`

export default function SnakeCase() {
  const URL = `https://en.wikipedia.org/wiki/Snake_case`

  const params: Param[] = [TEXT_PARAM]

  return (
    <Method code={code} params={params} title={SNAKE_CASE}>
      <P>
        Tranforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={URL}>snake case</ExternalLink>.
      </P>
    </Method>
  )
}
