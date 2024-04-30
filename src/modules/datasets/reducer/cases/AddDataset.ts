import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { DatasetNameGenerator } from "./DatasetNameGenerator"

interface Props {
  next(dataset: Dataset): void
}

export class AddDataset extends DatasetUseCase<Props> {
  public execute({ next }: Props): Dataset[] {
    const generator = new DatasetNameGenerator(this.datasets)

    const dataset = new Dataset({
      name: generator.execute({ name: "New Dataset" }),
      limit: Dataset.DEFAULT_LIMIT,
    })

    next(dataset)

    return [...this.datasets, dataset]
  }
}
