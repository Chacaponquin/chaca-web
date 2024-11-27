import { FieldDatatype } from "@modules/dataset/domain/core/datatype"
import { IValidator } from "../../../../app/domain/validator"
import { DatasetError } from "@modules/dataset/errors/dataset"
import { DATA_TYPES } from "@modules/modules/domain/constants"
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
