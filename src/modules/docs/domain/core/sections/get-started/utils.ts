import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const ONE_OF_ARRAY: SectionTitle = { id: "one-of-array", title: "oneOfArray" }

export const REPLACE_SYMBOLS: SectionTitle = { id: "replace-symbols", title: "replaceSymbols" }

export const CAMEL_CASE: SectionTitle = { id: "camel-case", title: "camelCase" }

export const SUM_DATE_RANGE: SectionTitle = { id: "sum-date-range", title: "sumDateRange" }

export const PICK: SectionTitle = { id: "pick", title: "pick" }

export const MULTIPLE: SectionTitle = { id: "multiple", title: "multiple" }

export const SNAKE_CASE: SectionTitle = { id: "snake_case", title: "snakeCase" }

export const DOT_CASE: SectionTitle = { id: "dot_case", title: "dotCase" }

export const SENTENCE_CASE: SectionTitle = { id: "sentence_case", title: "sentenceCase" }

export const PASCAL_CASE: SectionTitle = { id: "pascal_case", title: "pascalCase" }

export const CAPITAL_CASE: SectionTitle = { id: "capital_case", title: "capitalCase" }

export class UtilsSection extends DocSubSection {
  readonly replaceSymbolsUrl = this.buildUrl(REPLACE_SYMBOLS.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Utils", url: "utils" })

    this.titles = [
      ONE_OF_ARRAY,
      REPLACE_SYMBOLS,
      CAMEL_CASE,
      SUM_DATE_RANGE,
      PICK,
      MULTIPLE,
      SNAKE_CASE,
      DOT_CASE,
      SENTENCE_CASE,
      PASCAL_CASE,
    ]
  }
}
