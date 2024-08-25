import { Dataset } from "@modules/datasets/domain/core"
import { DatasetUseCase } from "./DatasetUseCase"
import { DatasetNameGenerator } from "./DatasetNameGenerator"
import { Id } from "@modules/shared/domain/id"

interface Props {
  next(dataset: Dataset): void
}

export class AddDataset extends DatasetUseCase<Props> {
  constructor(datasets: Dataset[], private readonly generator: DatasetNameGenerator) {
    super(datasets)
  }

  execute({ next }: Props): Dataset[] {
    const dataset = new Dataset({
      name: this.generator.execute({ name: "New Dataset" }),
      limit: Dataset.DEFAULT_LIMIT,
      id: Id.generate(),
    })

    next(dataset)

    return [...this.datasets, dataset]
  }
}
