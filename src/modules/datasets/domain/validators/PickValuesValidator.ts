import { FieldDataType } from "@modules/datasets/interfaces/dataset-field"
import { IValidator } from "./Validator"
import { DatasetError, EmptyValuesError } from "@modules/datasets/errors"
import { DATA_TYPES } from "@modules/schemas/constants"
import { ArrayValuesValidator } from "./ArrayValuesValidator"

interface Props {
  type: FieldDataType
}

export class PickValuesValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    if (this.props.type.type === DATA_TYPES.PICK) {
      if (this.props.type.values.length === 0) {
        return new EmptyValuesError()
      }

      const validator = new ArrayValuesValidator({ values: this.props.type.values })
      const error = validator.validate()

      if (error) {
        return error
      }
    }

    return null
  }
}
