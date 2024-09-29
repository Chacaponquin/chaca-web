import { DocSection, DocSubSection } from "../base"

class ApiSection extends DocSection {
  constructor() {
    super({ title: "REST API", url: "rest-api" })
  }
}

export const SECTION = new ApiSection()

export class OverviewSection extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Overview", url: "overview" })
  }
}

export class SchemaArraySection extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Schema Array", url: "schema-array" })
  }
}

export class SchemaObjectSection extends DocSubSection {
  readonly enumId = "enum"
  readonly bodyId = "body"
  readonly nestedSchemaId = "nested-schema"
  readonly moduleId = "module"

  constructor() {
    super({ parent: SECTION, title: "Schema Object", url: "schema-object" })
  }
}

export class ModuleValueSection extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Module Value", url: "module-value" })
  }
}

export const OVERVIEW = new OverviewSection()
export const SCHEMA_ARRAY = new SchemaArraySection()
export const SCHEMA_OBJECT = new SchemaObjectSection()
export const MODULE_VALUE = new ModuleValueSection()

SECTION.push([OVERVIEW, MODULE_VALUE, SCHEMA_OBJECT, SCHEMA_ARRAY])
