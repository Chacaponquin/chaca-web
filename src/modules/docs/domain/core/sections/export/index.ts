import { DocSection } from "../../base"
import { Csv } from "./csv"
import { Java } from "./java"
import { Javascript } from "./js"
import { Json } from "./json"
import { Overview } from "./overview"
import { Postgres } from "./postgresql"
import { Python } from "./python"
import { Typescript } from "./ts"
import { Yaml } from "./yaml"

class ExportSection extends DocSection {
  constructor() {
    super({ title: { en: "Extensions", es: "Extensiones" }, url: "export" })
  }
}

export const SECTION = new ExportSection()

export const OVERVIEW = new Overview(SECTION)
export const CSV = new Csv(SECTION)
export const JAVA = new Java(SECTION)
export const JS = new Javascript(SECTION)
export const JSON = new Json(SECTION)
export const POSTGRES = new Postgres(SECTION)
export const PYTHON = new Python(SECTION)
export const TYPESCRIPT = new Typescript(SECTION)
export const YAML = new Yaml(SECTION)

SECTION.push([OVERVIEW, CSV, JAVA, JS, JSON, POSTGRES, PYTHON, TYPESCRIPT, YAML])
