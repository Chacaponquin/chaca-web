import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: "Body" }

export const EXAMPLE: SectionTitle = { id: "example", title: "Example" }

export const SEQUENTIAL: SectionTitle = { id: "sequential", title: "Sequential" }

export const SEQUENCE: SectionTitle = { id: "sequence", title: "Sequence" }

export const ENUM: SectionTitle = { id: "enum", title: "Enum" }

export const PICK: SectionTitle = { id: "pick", title: "Pick" }

export const PROBABILITY: SectionTitle = { id: "probability", title: "Probability" }

export const MODULE: SectionTitle = { id: "module", title: "Module" }

export const NESTED_SCHEMA: SectionTitle = { id: "schema", title: "Schema" }

export const AVAILABLE_FIELDS: SectionTitle = {
  id: "available-fields",
  title: "Tipos de campo disponibles",
}

export class SchemaObjectSection extends DocSubSection {
  readonly bodyUrl = this.buildUrl(BODY.id)
  readonly nestedSchemaUrl = this.buildUrl(NESTED_SCHEMA.id)
  readonly moduleUrl = this.buildUrl(MODULE.id)

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Schema Object", es: "Schema Object" },
      url: "schema-object",
    })

    this.titles = [
      BODY,
      EXAMPLE,
      SEQUENTIAL,
      SEQUENCE,
      ENUM,
      PICK,
      PROBABILITY,
      MODULE,
      NESTED_SCHEMA,
      AVAILABLE_FIELDS,
    ]
  }
}
