import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { DatasetNameGenerator } from "./DatasetNameGenerator"

interface Props {
  dataset: Dataset
  next(array: Dataset): void
}

export class InsertDataset extends DatasetUseCase<Props> {
  public execute({ dataset, next }: Props): Dataset[] {
    const generator = new DatasetNameGenerator(this.datasets)
    dataset.setName(generator.execute({ name: `${dataset.name}_copy` }))

    const newDatasets = [...this.datasets, dataset]

    next(dataset)

    return newDatasets
  }
}
