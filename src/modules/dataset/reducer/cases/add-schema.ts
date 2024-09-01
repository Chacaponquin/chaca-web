import { Schema } from "@modules/dataset/domain/core"
import { DatasetUseCase } from "./base-use-case"
import { DatasetNameGenerator } from "./schema-name-generator"
import { Id } from "@modules/shared/domain/id"

interface Props {
  next(dataset: Schema): void
}

export class AddSchema extends DatasetUseCase<Props> {
  constructor(dataset: Schema[], private readonly generator: DatasetNameGenerator) {
    super(dataset)
  }

  execute({ next }: Props): Schema[] {
    const dataset = new Schema({
      name: this.generator.execute({ name: "New Schema" }),
      limit: Schema.DEFAULT_LIMIT,
      id: Id.generate(),
    })

    next(dataset)

    return [...this.dataset, dataset]
  }
}
