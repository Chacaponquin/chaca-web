import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const SLUG: SectionTitle = { id: "slug", title: "slug" }

export const WORDS: SectionTitle = { id: "words", title: "words" }

export const PARAGRAPHS: SectionTitle = { id: "paragraphs", title: "paragraphs" }

export const SENTENCES: SectionTitle = { id: "sentences", title: "sentences" }

export const WORD: SectionTitle = { id: "word", title: "word" }

export const SENTENCE: SectionTitle = { id: "sentence", title: "sentence" }

export const PARAGRAPH: SectionTitle = { id: "paragraph", title: "paragraph" }

export class Lorem extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Lorem", es: "Lorem" }, url: "lorem", apiId: "lorem" })

    this.titles = [SLUG, WORDS, PARAGRAPHS, SENTENCES, WORD, SENTENCE, PARAGRAPH]
  }
}
