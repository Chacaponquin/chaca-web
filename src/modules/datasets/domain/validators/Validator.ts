import { DatasetError } from "@modules/datasets/errors"

export interface IValidator {
  validate(): DatasetError | null
}

interface Props {
  error(error: DatasetError): void
  success(): void
}

export class Validator {
  constructor(private readonly v: IValidator[]) {}

  execute({ error, success }: Props): void {
    const all = [] as DatasetError[]

    for (const val of this.v) {
      const error = val.validate()

      if (error) {
        all.push(error)
      }
    }

    if (all.length === 0) {
      success()
    } else {
      error(all[0])
    }
  }
}
