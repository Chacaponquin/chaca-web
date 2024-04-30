import { DatasetError, RepeatDatasetNameError } from "@modules/datasets/errors"
import { IValidator } from "../../../app/domain/Validator"
import { Dataset } from "../tree"

interface Props {
  name: string
  id: string
  datasets: Dataset[]
}

export class NoDuplicateDataset implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    const found = this.props.datasets
      .filter((d) => d.id !== this.props.id)
      .some((d) => d.name === this.props.name)

    if (found) {
      return new RepeatDatasetNameError()
    } else {
      return null
    }
  }
}
