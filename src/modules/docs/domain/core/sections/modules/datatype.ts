import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const ALPHANUMERIC: SectionTitle = { id: "alphanumeric", title: "alphaNumeric" }

export const SPECIAL_CHARACTER: SectionTitle = {
  id: "special_character",
  title: "specialCharacter",
}

export const BOOLEAN: SectionTitle = { id: "boolean", title: "boolean" }

export const INT: SectionTitle = { id: "int", title: "int" }

export const FLOAT: SectionTitle = { id: "float", title: "float" }

export const NUMBER: SectionTitle = { id: "number", title: "number" }

export const HEXADECIMAL: SectionTitle = { id: "hexadecimal", title: "hexadecimal" }

export const MATRIX: SectionTitle = { id: "matrix", title: "matrix" }

export const CHARACTERS: SectionTitle = { id: "characters", title: "characters" }

export const BINARY_CODE: SectionTitle = { id: "binary_code", title: "binaryCode" }

export class Datatype extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Datatype", url: "datatype", apiId: "datatype" })

    this.titles = [
      ALPHANUMERIC,
      SPECIAL_CHARACTER,
      BOOLEAN,
      INT,
      FLOAT,
      NUMBER,
      HEXADECIMAL,
      MATRIX,
      CHARACTERS,
      BINARY_CODE,
    ]
  }
}
