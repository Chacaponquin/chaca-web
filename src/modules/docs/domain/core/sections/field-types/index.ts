import { DocSection } from "../../base"
import { Custom } from "./custom"
import { Enum } from "./enum"
import { Key } from "./key"
import { Pick } from "./pick"
import { Probability } from "./probability"
import { Ref } from "./ref"
import { Sequence } from "./sequence"
import { Sequential } from "./sequential"

class FieldTypesSection extends DocSection {
  constructor() {
    super({ title: { en: "Field types", es: "Tipos de campo" }, url: "field-types" })
  }
}

export const SECTION = new FieldTypesSection()

export const CUSTOM = new Custom(SECTION)
export const ENUM = new Enum(SECTION)
export const REF = new Ref(SECTION)
export const SEQUENCE = new Sequence(SECTION)
export const SEQUENTIAL = new Sequential(SECTION)
export const PICK = new Pick(SECTION)
export const PROBABILITY = new Probability(SECTION)
export const KEY = new Key(SECTION)

SECTION.push([CUSTOM, ENUM, KEY, REF, SEQUENCE, SEQUENTIAL, PROBABILITY, PICK])
