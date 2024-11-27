import { DatasetError, EmptyFieldNameError } from "@modules/dataset/errors/dataset"
import { IValidator } from "@modules/app/domain/validator"

interface Props {
  name: string
}

export class FieldNameValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    if (this.props.name === "") {
      return new EmptyFieldNameError()
    }

    return null
  }
}
