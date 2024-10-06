import { WORD } from "@modules/docs/domain/core/sections/modules"
import { SectionProvider } from "../../shared/context"
import { MethodSection } from "../../shared/components"
import { ADJECTIVE_CODE } from "./domain/adjective"
import {
  ADJECTIVE,
  ADVERB,
  CONJUCTION,
  INTERJECTION,
  NOUN,
  PREPOSITION,
  VERB,
} from "@modules/docs/domain/core/sections/modules/word"
import { COMMON_PARAMS } from "./domain/params"
import { ADVERB_CODE } from "./domain/adverb"
import { CONJUCTION_CODE } from "./domain/conjuction"
import { NOUN_CODE } from "./domain/noun"
import { VERB_CODE } from "./domain/verb"
import { INTERJECTION_CODE } from "./domain/interjection"
import { PREPOSITION_CODE } from "./domain/preposition"

export default function Word() {
  return (
    <SectionProvider section={WORD} result="json">
      <MethodSection code={ADJECTIVE_CODE} title={ADJECTIVE} params={COMMON_PARAMS} />

      <MethodSection code={ADVERB_CODE} title={ADVERB} params={COMMON_PARAMS} />

      <MethodSection code={CONJUCTION_CODE} title={CONJUCTION} params={COMMON_PARAMS} />

      <MethodSection code={NOUN_CODE} params={COMMON_PARAMS} title={NOUN} />

      <MethodSection code={VERB_CODE} title={VERB} params={COMMON_PARAMS} />

      <MethodSection code={INTERJECTION_CODE} params={COMMON_PARAMS} title={INTERJECTION} />

      <MethodSection code={PREPOSITION_CODE} title={PREPOSITION} params={COMMON_PARAMS} />
    </SectionProvider>
  )
}
