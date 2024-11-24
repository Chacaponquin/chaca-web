import { DocSection } from "../../base"
import { DatasetSection } from "./dataset"
import { ModuleValueSection } from "./module-value"
import { OverviewSection } from "./overview"
import { SchemaArraySection } from "./schema-array"
import { SchemaObjectSection } from "./schema-object"
import { TransformDatasetSection } from "./transform-dataset"
import { TransformSchemaSection } from "./transform-schema"

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
export const DATASET = new DatasetSection(SECTION)
export const TRANSFORM_DATASET = new TransformDatasetSection(SECTION)
export const TRANSFORM_SCHEMA = new TransformSchemaSection(SECTION)

SECTION.push([
  OVERVIEW,
  MODULE_VALUE,
  SCHEMA_OBJECT,
  SCHEMA_ARRAY,
  DATASET,
  TRANSFORM_DATASET,
  TRANSFORM_SCHEMA,
])
