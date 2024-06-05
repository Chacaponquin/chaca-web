import { Dataset } from "@modules/datasets/domain/dataset"
import { DatasetUseCase } from "./DatasetUseCase"
import { v4 as uuid } from "uuid"
import { DatasetNameGenerator } from "./DatasetNameGenerator"

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
      id: uuid(),
    })

    next(dataset)

    return [...this.datasets, dataset]
  }
}
