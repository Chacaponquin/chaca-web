import { DatasetError, RepeatDatasetNameError } from "@modules/dataset/errors/dataset"
import { IValidator } from "@modules/app/domain/validator"
import { Schema } from "../../core/schema"

interface Props {
  name: string
  id: string
  dataset: Schema[]
}

export class NoDuplicateSchema implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    const found = this.props.dataset
      .filter((d) => d.id !== this.props.id)
      .some((d) => d.name === this.props.name)

    if (found) {
      return new RepeatDatasetNameError()
    } else {
      return null
    }
  }
}
