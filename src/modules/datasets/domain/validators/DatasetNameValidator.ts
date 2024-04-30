import { DatasetError, EmptyDatasetNameError } from "@modules/datasets/errors"
import { IValidator } from "../../../app/domain/Validator"

interface Props {
  name: string
}

export class DatasetNameValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    if (this.props.name === "") {
      return new EmptyDatasetNameError()
    }

    return null
  }
}
