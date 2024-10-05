import { DocSection } from "../../base"
import { ModuleValueSection } from "./module-value"
import { OverviewSection } from "./overview"
import { SchemaArraySection } from "./schema-array"
import { SchemaObjectSection } from "./schema-object"

class ApiSection extends DocSection {
  constructor() {
    super({ title: "REST API", url: "rest-api" })
  }
}

export const SECTION = new ApiSection()

export const OVERVIEW = new OverviewSection(SECTION)
export const SCHEMA_ARRAY = new SchemaArraySection(SECTION)
export const SCHEMA_OBJECT = new SchemaObjectSection(SECTION)
export const MODULE_VALUE = new ModuleValueSection(SECTION)

SECTION.push([OVERVIEW, MODULE_VALUE, SCHEMA_OBJECT, SCHEMA_ARRAY])
