import {
  PARAGRAPHS,
  SENTENCES,
  SLUG,
  WORDS,
} from "@modules/docs/domain/core/sections/modules/lorem"
import { MethodSection } from "../../shared/components"
import { SLUG_CODE, SLUG_PARAMS } from "./domain/slug"
import { PARAGRAPHS_CODE, PARAGRAPHS_PARAMS } from "./domain/paragraphs"
import { SENTENCES_CODE, SENTENCES_PARAMS } from "./domain/sentences"
import { WORDS_CODE, WORDS_PARAMS } from "./domain/words"
import { SectionProvider } from "../../shared/context"
import { LOREM } from "@modules/docs/domain/core/sections/modules"

export default function Lorem() {
  return (
    <SectionProvider section={LOREM} result="json">
      <MethodSection title={SLUG} code={SLUG_CODE} params={SLUG_PARAMS} />

      <MethodSection title={PARAGRAPHS} code={PARAGRAPHS_CODE} params={PARAGRAPHS_PARAMS} />

      <MethodSection title={SENTENCES} code={SENTENCES_CODE} params={SENTENCES_PARAMS} />

      <MethodSection title={WORDS} code={WORDS_CODE} params={WORDS_PARAMS} />
    </SectionProvider>
  )
}
