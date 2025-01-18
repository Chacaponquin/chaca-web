import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const ONE_OF_ARRAY: SectionTitle = {
  id: "one-of-array",
  title: { es: "oneOfArray", en: "oneOfArray" },
}

export const REPLACE_SYMBOLS: SectionTitle = {
  id: "replace-symbols",
  title: { es: "replaceSymbols", en: "replaceSymbols" },
}

export const CAMEL_CASE: SectionTitle = {
  id: "camel-case",
  title: { es: "camelCase", en: "camelCase" },
}

export const SUM_DATE_RANGE: SectionTitle = {
  id: "sum-date-range",
  title: { es: "sumDateRange", en: "sumDateRange" },
}

export const PICK: SectionTitle = { id: "pick", title: { en: "pick", es: "pick" } }

export const MULTIPLE: SectionTitle = { id: "multiple", title: { en: "multiple", es: "multiple" } }

export const SNAKE_CASE: SectionTitle = {
  id: "snake-case",
  title: { es: "snakeCase", en: "snakeCase" },
}

export const DOT_CASE: SectionTitle = { id: "dot-case", title: { es: "dotCase", en: "dotCase" } }

export const SENTENCE_CASE: SectionTitle = {
  id: "sentence-case",
  title: { es: "sentenceCase", en: "sentenceCase" },
}

export const PASCAL_CASE: SectionTitle = {
  id: "pascal-case",
  title: { es: "pascalCase", en: "pascalCase" },
}

export const CAPITAL_CASE: SectionTitle = {
  id: "capital-case",
  title: { es: "capitalCase", en: "capitalCase" },
}

export class UtilsSection extends DocSubSection {
  readonly replaceSymbolsUrl = this.buildUrl(REPLACE_SYMBOLS.id)

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Utils", es: "Utils" },
      url: "utils",
      description: {
        es: "Aprende como utilizar los métodos útiles para generar los valores de los módulos de Chaca",
        en: "Learn how to use the Chaca util methods to generate module values",
      },
    })

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
