import { FieldDatatype } from "@modules/datasets/interfaces/dataset-field"
import { IValidator } from "../../../../app/domain/Validator"
import { DatasetError } from "@modules/datasets/errors/dataset"
import { DATA_TYPES } from "@modules/schemas/constants"
import { ArrayValuesValidator } from "./ArrayValuesValidator"
import { PickCountValidator } from "./PickCountValidator"

interface Props {
  type: FieldDatatype
}

export class PickValuesValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    if (this.props.type.type === DATA_TYPES.PICK) {
      const validator = new ArrayValuesValidator({ values: this.props.type.values })
      const error = validator.validate()

      if (error) {
        return error
      }

      const countValidator = new PickCountValidator({
        count: this.props.type.count,
        length: this.props.type.values.length,
      })

      const countError = countValidator.validate()

      if (countError) {
        return countError
      }
    }

    return null
  }
}
