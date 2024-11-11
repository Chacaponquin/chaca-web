import {
  PARAGRAPHS,
  SENTENCES,
  SLUG,
  WORDS,
  PARAGRAPH,
  SENTENCE,
  WORD,
} from "@modules/docs/domain/core/sections/modules/lorem"
import { MethodSection } from "../../shared/components"
import { SLUG_CODE, SLUG_PARAMS } from "./domain/slug"
import { PARAGRAPHS_CODE, PARAGRAPHS_PARAMS } from "./domain/paragraphs"
import { SENTENCES_CODE, SENTENCES_PARAMS } from "./domain/sentences"
import { WORDS_CODE, WORDS_PARAMS } from "./domain/words"
import { SectionProvider } from "../../shared/context"
import { LOREM } from "@modules/docs/domain/core/sections/modules"
import { PARAGRAPH_CODE, PARAGRAPH_PARAMS } from "./domain/paragraph"
import { SENTENCE_CODE, SENTENCE_PARAMS } from "./domain/sentence"
import { WORD_CODE } from "./domain/word"

export default function Lorem() {
  return (
    <SectionProvider section={LOREM} result="json">
      <MethodSection title={SLUG} code={SLUG_CODE} params={SLUG_PARAMS} />

      <MethodSection title={PARAGRAPHS} code={PARAGRAPHS_CODE} params={PARAGRAPHS_PARAMS} />

      <MethodSection title={SENTENCES} code={SENTENCES_CODE} params={SENTENCES_PARAMS} />

      <MethodSection title={WORDS} code={WORDS_CODE} params={WORDS_PARAMS} />

      <MethodSection title={PARAGRAPH} code={PARAGRAPH_CODE} params={PARAGRAPH_PARAMS} />

      <MethodSection title={SENTENCE} code={SENTENCE_CODE} params={SENTENCE_PARAMS} />

      <MethodSection title={WORD} code={WORD_CODE} params={[]} />
    </SectionProvider>
  )
}
