import { DocSection } from "../../base"
import { Dataset } from "./dataset"
import { Schema } from "./schema"
import { SchemaField } from "./schema-field"
import { DatasetStore } from "./store"

class ConceptsSection extends DocSection {
  constructor() {
    super({ title: { en: "Core Concepts", es: "Conceptos" }, url: "core-concepts" })
  }
}

export const SECTION = new ConceptsSection()

export const DATASET = new Dataset(SECTION)
export const DATASET_STORE = new DatasetStore(SECTION)
export const SCHEMA = new Schema(SECTION)
export const SCHEMA_FIELD = new SchemaField(SECTION)

SECTION.push([SCHEMA, SCHEMA_FIELD, DATASET, DATASET_STORE])
