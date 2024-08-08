import { DocSection, DocSubSection } from "../base"

class FieldTypesSection extends DocSection {
  constructor() {
    super({ title: "Field types", url: "field-types" })
  }
}

export const SECTION = new FieldTypesSection()

class CustomSchemaField extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Custom Field", url: "custom-schema-fields" })
  }
}

class Custom extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Custom", url: "custom" })
  }
}

class Enum extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Enum", url: "enum" })
  }
}

class FieldConfig extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Field config", url: "field" })
  }
}

class NestedSchema extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Nested schema", url: "nested-schema" })
  }
}

class Ref extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Ref", url: "ref" })
  }
}

class Sequence extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Sequence", url: "sequence" })
  }
}

class Sequential extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Sequential", url: "sequential" })
  }
}

class Probability extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Probability", url: "probability" })
  }
}

class Pick extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Pick", url: "pick" })
  }
}

export const CUSTOM_SCHEMA_FIELD = new CustomSchemaField()
export const CUSTOM = new Custom()
export const ENUM = new Enum()
export const FIELD_CONFIG = new FieldConfig()
export const NESTED_SCHEMA = new NestedSchema()
export const REF = new Ref()
export const SEQUENCE = new Sequence()
export const SEQUENTIAL = new Sequential()
export const PICK = new Pick()
export const PROBABILITY = new Probability()

SECTION.push([
  CUSTOM_SCHEMA_FIELD,
  CUSTOM,
  ENUM,
  FIELD_CONFIG,
  NESTED_SCHEMA,
  REF,
  SEQUENCE,
  SEQUENTIAL,
  PROBABILITY,
  PICK,
])
