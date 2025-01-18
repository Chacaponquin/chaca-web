import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const BODY: SectionTitle = { id: "body", title: { en: "Body", es: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Example" } }

export const SEQUENTIAL: SectionTitle = {
  id: "sequential",
  title: { en: "Sequential", es: "Sequential" },
}

export const SEQUENCE: SectionTitle = { id: "sequence", title: { en: "Sequence", es: "Sequence" } }

export const ENUM: SectionTitle = { id: "enum", title: { en: "Enum", es: "Enum" } }

export const REF: SectionTitle = { id: "ref", title: { en: "Ref", es: "Ref" } }

export const PICK: SectionTitle = { id: "pick", title: { en: "Pick", es: "Pick" } }

export const PROBABILITY: SectionTitle = {
  id: "probability",
  title: { en: "Probability", es: "Probability" },
}

export const MODULE: SectionTitle = { id: "module", title: { en: "Module", es: "Module" } }

export const NESTED_SCHEMA: SectionTitle = { id: "schema", title: { en: "Schema", es: "Schema" } }

export const AVAILABLE_FIELDS: SectionTitle = {
  id: "available-fields",
  title: { es: "Tipos de campo disponibles", en: "Available field types" },
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
      description: {
        es: "Aprende acerca de cómo utilizar la ruta /schema de nuestra API REST para generar un objeto de datos a través de la definición de un schema",
        en: "Learn how to use the /schema route of our REST API to generate a data object with a schema definition",
      },
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
      REF,
    ]
  }
}
