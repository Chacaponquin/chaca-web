import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { DatasetNameGenerator } from "./DatasetNameGenerator"
import { v4 as uuid } from "uuid"

interface Props {
  next(dataset: Dataset): void
}

export class AddDataset extends DatasetUseCase<Props> {
  public execute({ next }: Props): Dataset[] {
    const generator = new DatasetNameGenerator(this.datasets)

    const dataset = new Dataset({
      name: generator.execute({ name: "New Dataset" }),
      limit: Dataset.DEFAULT_LIMIT,
      id: uuid(),
    })

    next(dataset)

    return [...this.datasets, dataset]
  }
}
