import { DatasetError, InvalidPickCountError } from "@modules/dataset/errors/dataset"
import { IValidator } from "@modules/app/domain/validator"

interface Props {
  count: number
  length: number
}

export class PickCountValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    if (!(this.props.length >= this.props.count)) {
      return new InvalidPickCountError()
    }

    return null
  }
}
