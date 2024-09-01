import { DatasetError, EmptyDatasetNameError } from "@modules/dataset/errors/dataset"
import { IValidator } from "@modules/app/domain"

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
