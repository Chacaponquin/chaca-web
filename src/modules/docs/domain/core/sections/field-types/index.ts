import { DocSection, DocSubSection } from "../../base"
import { Pick } from "./pick"
import { Probability } from "./probability"
import { Ref } from "./ref"

class FieldTypesSection extends DocSection {
  constructor() {
    super({ title: { en: "Field types", es: "Tipos de campo" }, url: "field-types" })
  }
}

export const SECTION = new FieldTypesSection()

class Custom extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Custom", es: "Custom" }, url: "custom" })
  }
}

class Enum extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Enum", es: "Enum" }, url: "enum" })
  }
}

class Key extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Key", es: "Key" }, url: "key" })
  }
}

class Sequence extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Sequence", es: "Sequence" }, url: "sequence" })
  }
}

class Sequential extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Sequential", es: "Sequential" }, url: "sequential" })
  }
}

export const CUSTOM = new Custom()
export const ENUM = new Enum()
export const REF = new Ref(SECTION)
export const SEQUENCE = new Sequence()
export const SEQUENTIAL = new Sequential()
export const PICK = new Pick(SECTION)
export const PROBABILITY = new Probability(SECTION)
export const KEY = new Key()

SECTION.push([CUSTOM, ENUM, KEY, REF, SEQUENCE, SEQUENTIAL, PROBABILITY, PICK])
