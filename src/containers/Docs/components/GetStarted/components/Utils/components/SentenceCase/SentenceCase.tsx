import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { Method } from "../../shared/components"
import { SENTENCE_CASE } from "@modules/docs/domain/core/sections/get-started/utils"
import { ExternalLink, P } from "@markdown/components/Markdown/components"
import { TEXT_PARAM } from "../../shared/domain/text"

const code = `
chaca.utils.sentenceCase('Hello World') // 'Hello world'
chaca.utils.sentenceCase('hiFriend') // 'Hi friend'
`

export default function SentenceCase() {
  const URL = `https://www.k-state.edu/grad/academics/etdr/write/sentence-case.html`

  const params: Param[] = [TEXT_PARAM]

  return (
    <Method code={code} params={params} title={SENTENCE_CASE}>
      <P>
        Tranforma en cualquier cadena de texto en la sintáxis{" "}
        <ExternalLink to={URL}>sentence case</ExternalLink>.
      </P>
    </Method>
  )
}
