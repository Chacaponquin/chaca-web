import { Schema, SchemaOption } from "./schema"

export class SchemaSearcher {
  constructor(private readonly schemas: Schema[]) {}

  findOption(p: string, t: string): SchemaOption {
    const foundParent = this.findParent(p)
    return foundParent.options.find((el) => el.id === t) as SchemaOption
  }

  findParent(p: string): Schema {
    return this.schemas.find((el) => el.id === p) as Schema
  }
}
