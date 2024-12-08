import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { SNAKE_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { ExternalLink, P } from "@markdown/components/Markdown/components"
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
        Transforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={URL}>snake_case</ExternalLink>.
      </P>
    </Method>
  )
}
