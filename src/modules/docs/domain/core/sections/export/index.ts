import { DocSection, DocSubSection } from "../../base"
import { Overview } from "./overview"
import { Postgres } from "./postgresql"

class ExportSection extends DocSection {
  constructor() {
    super({ title: "Export", url: "export" })
  }
}

export const SECTION = new ExportSection()

class Csv extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "CSV", url: "csv" })
  }
}

class Java extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Java", url: "java" })
  }
}

class Javascript extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Javascript", url: "javascript" })
  }
}

class Json extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Json", url: "json" })
  }
}

class Python extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Python", url: "python" })
  }
}

class Typescript extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Typescript", url: "typescript" })
  }
}

class Yaml extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Yaml", url: "yaml" })
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
