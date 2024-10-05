import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const SLUG: SectionTitle = { id: "slug", title: "slug" }

export const WORDS: SectionTitle = { id: "words", title: "words" }

export const PARAGRAPHS: SectionTitle = { id: "paragraphs", title: "paragraphs" }

export const SENTENCES: SectionTitle = { id: "sentences", title: "sentences" }

export class Lorem extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Lorem", url: "lorem", apiId: "lorem" })

    this.titles = [SLUG, WORDS, PARAGRAPHS, SENTENCES]
  }
}
