import { Schema } from "@modules/dataset/domain/core"
import { DatasetUseCase } from "./base-use-case"
import { DatasetNameGenerator } from "./schema-name-generator"

interface Props {
  schema: Schema
  next(array: Schema): void
}

export class InsertSchema extends DatasetUseCase<Props> {
  public execute({ schema, next }: Props): Schema[] {
    const generator = new DatasetNameGenerator(this.dataset)
    schema.setName(generator.execute({ name: `${schema.name}_copy` }))

    const newDataset = [...this.dataset, schema]

    next(schema)

    return newDataset
  }
}
