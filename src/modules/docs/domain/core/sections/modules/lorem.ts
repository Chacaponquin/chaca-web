import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const SLUG: ModuleSubSectionTitle = { id: "slug", title: "slug" }

export const WORDS: ModuleSubSectionTitle = { id: "words", title: "words" }

export const PARAGRAPHS: ModuleSubSectionTitle = { id: "paragraphs", title: "paragraphs" }

export const SENTENCES: ModuleSubSectionTitle = { id: "sentences", title: "sentences" }

export const WORD: ModuleSubSectionTitle = { id: "word", title: "word" }

export const SENTENCE: ModuleSubSectionTitle = { id: "sentence", title: "sentence" }

export const PARAGRAPH: ModuleSubSectionTitle = { id: "paragraph", title: "paragraph" }

export class Lorem extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Lorem", es: "Lorem" },
      url: "lorem",
      apiId: "lorem",
      titles: [SLUG, WORDS, PARAGRAPHS, SENTENCES, WORD, SENTENCE, PARAGRAPH],
    })
  }
}
