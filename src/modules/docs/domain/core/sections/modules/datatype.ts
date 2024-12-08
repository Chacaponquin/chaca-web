import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const ALPHANUMERIC: ModuleSubSectionTitle = { id: "alphanumeric", title: "alphaNumeric" }

export const SPECIAL_CHARACTER: ModuleSubSectionTitle = {
  id: "special_character",
  title: "specialCharacter",
}

export const BOOLEAN: ModuleSubSectionTitle = { id: "boolean", title: "boolean" }

export const INT: ModuleSubSectionTitle = { id: "int", title: "int" }

export const FLOAT: ModuleSubSectionTitle = { id: "float", title: "float" }

export const NUMBER: ModuleSubSectionTitle = { id: "number", title: "number" }

export const HEXADECIMAL: ModuleSubSectionTitle = { id: "hexadecimal", title: "hexadecimal" }

export const MATRIX: ModuleSubSectionTitle = { id: "matrix", title: "matrix" }

export const CHARACTERS: ModuleSubSectionTitle = { id: "characters", title: "characters" }

export const BINARY_CODE: ModuleSubSectionTitle = { id: "binary_code", title: "binaryCode" }

export const OCTAL: ModuleSubSectionTitle = { id: "octal", title: "octal" }

export const CHARACTER: ModuleSubSectionTitle = { id: "character", title: "character" }

export const BIGINT: ModuleSubSectionTitle = { id: "bigint", title: "bigint" }

export const NUMERIC: ModuleSubSectionTitle = { id: "numeric", title: "numeric" }

export class Datatype extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Datatype", es: "Datatype" },
      url: "datatype",
      apiId: "datatype",
      titles: [
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
        OCTAL,
        CHARACTER,
        BIGINT,
        NUMERIC,
      ],
    })
  }
}
