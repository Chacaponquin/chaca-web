import { Schema } from "@modules/dataset/domain/core/schema"

interface Props {
  name: string
}

export class DatasetNameGenerator {
  constructor(private readonly dataset: Schema[]) {}

  execute({ name: iname }: Props): string {
    let name = iname

    let valid = false
    while (!valid) {
      const exists = this.dataset.some((d) => d.equalName(name))

      if (exists) {
        name += "_"
      } else {
        valid = true
      }
    }

    return name
  }
}
