import { DocSection, DocSubSection } from "../../base"
import { Schema } from "./schema"

class ConceptsSection extends DocSection {
  constructor() {
    super({ title: "Core Concepts", url: "core-concepts" })
  }
}

export const SECTION = new ConceptsSection()

class Dataset extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Dataset", url: "dataset" })
  }
}

class DatasetStore extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Dataset store", url: "dataset-store" })
  }
}

class SchemaField extends DocSubSection {
  readonly arrayFieldsId = "array-fields"

  constructor() {
    super({ parent: SECTION, title: "Schema field", url: "schema-field" })
  }
}

export const DATASET = new Dataset()
export const DATASET_STORE = new DatasetStore()
export const SCHEMA = new Schema(SECTION)
export const SCHEMA_FIELD = new SchemaField()

SECTION.push([SCHEMA, SCHEMA_FIELD, DATASET, DATASET_STORE])
