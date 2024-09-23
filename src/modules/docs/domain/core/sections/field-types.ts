import { DocSection, DocSubSection } from "../base"

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

class Ref extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Ref", url: "ref" })
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

class Probability extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Probability", url: "probability" })
  }
}

class Pick extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Pick", url: "pick" })
  }
}

export const CUSTOM = new Custom()
export const ENUM = new Enum()
export const REF = new Ref()
export const SEQUENCE = new Sequence()
export const SEQUENTIAL = new Sequential()
export const PICK = new Pick()
export const PROBABILITY = new Probability()
export const KEY = new Key()

SECTION.push([CUSTOM, ENUM, KEY, REF, SEQUENCE, SEQUENTIAL, PROBABILITY, PICK])
