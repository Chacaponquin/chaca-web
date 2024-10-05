import { DocSection, DocSubSection } from "../../base"
import { Pick } from "./pick"
import { Probability } from "./probability"
import { Ref } from "./ref"

class FieldTypesSection extends DocSection {
  constructor() {
    super({ title: "Field types", url: "field-types" })
  }
}

export const SECTION = new FieldTypesSection()

class Custom extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Custom", url: "custom" })
  }
}

class Enum extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Enum", url: "enum" })
  }
}

class Key extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Key", url: "key" })
  }
}

class Sequence extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Sequence", url: "sequence" })
  }
}

class Sequential extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Sequential", url: "sequential" })
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
