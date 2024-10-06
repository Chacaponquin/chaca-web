import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const ONE_OF_ARRAY: SectionTitle = { id: "one-of-array", title: "oneOfArray" }

export const REPLACE_SYMBOLS: SectionTitle = { id: "replace-symbols", title: "replaceSymbols" }

export const CAMEL_CASE: SectionTitle = { id: "camel-case", title: "camelCase" }

export const CAPITALIZE_WORD: SectionTitle = { id: "capitalize-word", title: "capitalizeWord" }

export const CAPITALIZE: SectionTitle = { id: "capitalize", title: "capitalize" }

export const SUM_DATE_RANGE: SectionTitle = { id: "sum-date-range", title: "sumDateRange" }

export class UtilsSection extends DocSubSection {
  readonly replaceSymbolsUrl = this.buildUrl(REPLACE_SYMBOLS.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Utils", url: "utils" })

    this.titles = [
      ONE_OF_ARRAY,
      REPLACE_SYMBOLS,
      CAMEL_CASE,
      CAPITALIZE,
      CAPITALIZE_WORD,
      SUM_DATE_RANGE,
    ]
  }
}
