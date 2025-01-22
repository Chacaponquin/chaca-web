import { Schema } from "@modules/dataset/domain/core/schema"

export abstract class DatasetUseCase<T = undefined> {
  constructor(protected readonly dataset: Schema[]) {}

  abstract execute(props: T): Schema[]
}
