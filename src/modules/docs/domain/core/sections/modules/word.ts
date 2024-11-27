import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const ADVERB: SectionTitle = { id: "adverb", title: "adverb" }

export const ADJECTIVE: SectionTitle = { id: "adjective", title: "adjective" }

export const CONJUCTION: SectionTitle = { id: "conjuction", title: "conjuction" }

export const INTERJECTION: SectionTitle = { id: "interjection", title: "interjection" }

export const NOUN: SectionTitle = { id: "noun", title: "noun" }

export const PREPOSITION: SectionTitle = { id: "preposition", title: "preposition" }

export const VERB: SectionTitle = { id: "verb", title: "verb" }

export class Word extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Word", es: "Word" }, url: "word", apiId: "word" })

    this.titles = [VERB, NOUN, INTERJECTION, PREPOSITION, ADVERB, ADJECTIVE, CONJUCTION]
  }
}
