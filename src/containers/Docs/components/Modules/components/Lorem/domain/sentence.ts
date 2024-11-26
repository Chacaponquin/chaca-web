import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { WORDS_MIN } from "../shared/domain/words-min"
import { WORDS_MAX } from "../shared/domain/words-max"

export const SENTENCE_CODE = `
modules.lorem.sentence() // 'Voluptatum cupiditate suscipit autem eveniet aut dolorem aut officiis distinctio.'
modules.lorem.sentence(5) // 'Laborum voluptatem officiis est et.'
modules.lorem.sentence({ min: 3, max: 5 }) // 'Fugiat repellendus nisi.'
`

export const SENTENCE_PARAMS: Param[] = [WORDS_MIN, WORDS_MAX]
