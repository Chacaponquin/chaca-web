import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

interface Props {
  next(dataset: Dataset): void
}

export class AddDataset extends DatasetUseCase<Props> {
  public execute({ next }: Props): Dataset[] {
    const dataset = new Dataset({ name: this.genName() })

    next(dataset)

    return [...this.datasets, dataset]
  }

  private genName(): string {
    let name = "New Dataset"

    let valid = false
    while (!valid) {
      const exists = this.datasets.some((d) => d.equalName(name))

      if (exists) {
        name += "_"
      } else {
        valid = true
      }
    }

    return name
  }
}
