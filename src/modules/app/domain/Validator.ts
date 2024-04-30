import { ChacaError } from "../exceptions"

export interface IValidator {
  validate(): ChacaError | null
}

interface Props {
  error(error: ChacaError): void
  success(): void
}

export class Validator {
  constructor(private readonly validators: IValidator[]) {}

  execute({ error, success }: Props): void {
    const all = [] as ChacaError[]

    for (const val of this.validators) {
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
