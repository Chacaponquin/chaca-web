import { Dataset } from "@modules/datasets/domain/tree"

interface Props {
  name: string
}

export class DatasetNameGenerator {
  constructor(private readonly datasets: Dataset[]) {}

  execute({ name: iname }: Props): string {
    let name = iname

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
