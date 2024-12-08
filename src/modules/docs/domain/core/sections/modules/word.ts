import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const ADVERB: ModuleSubSectionTitle = { id: "adverb", title: "adverb" }

export const ADJECTIVE: ModuleSubSectionTitle = { id: "adjective", title: "adjective" }

export const CONJUCTION: ModuleSubSectionTitle = { id: "conjuction", title: "conjuction" }

export const INTERJECTION: ModuleSubSectionTitle = { id: "interjection", title: "interjection" }

export const NOUN: ModuleSubSectionTitle = { id: "noun", title: "noun" }

export const PREPOSITION: ModuleSubSectionTitle = { id: "preposition", title: "preposition" }

export const VERB: ModuleSubSectionTitle = { id: "verb", title: "verb" }

export class Word extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Word", es: "Word" },
      url: "word",
      apiId: "word",
      titles: [VERB, NOUN, INTERJECTION, PREPOSITION, ADVERB, ADJECTIVE, CONJUCTION],
    })
  }
}
