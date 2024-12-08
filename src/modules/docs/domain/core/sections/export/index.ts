import { DocSection, DocSubSection } from "../../base"
import { Overview } from "./overview"
import { Postgres } from "./postgresql"

class ExportSection extends DocSection {
  constructor() {
    super({ title: { en: "Extensions", es: "Extensiones" }, url: "export" })
  }
}

export const SECTION = new ExportSection()

class Csv extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "CSV", es: "CSV" }, url: "csv" })
  }
}

class Java extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Java", es: "Java" }, url: "java" })
  }
}

class Javascript extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Javascript", es: "Javascript" }, url: "javascript" })
  }
}

class Json extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Json", es: "Json" }, url: "json" })
  }
}

class Python extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Python", es: "Python" }, url: "python" })
  }
}

class Typescript extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Typescript", es: "Typescript" }, url: "typescript" })
  }
}

class Yaml extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: { en: "Yaml", es: "Yaml" }, url: "yaml" })
  }
}

export const OVERVIEW = new Overview(SECTION)
export const CSV = new Csv()
export const JAVA = new Java()
export const JS = new Javascript()
export const JSON = new Json()
export const POSTGRES = new Postgres(SECTION)
export const PYTHON = new Python()
export const TYPESCRIPT = new Typescript()
export const YAML = new Yaml()

SECTION.push([OVERVIEW, CSV, JAVA, JS, JSON, POSTGRES, PYTHON, TYPESCRIPT, YAML])
