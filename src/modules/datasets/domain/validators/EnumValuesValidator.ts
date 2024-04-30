import { FieldDataType } from "@modules/datasets/interfaces/dataset-field"
import { IValidator } from "../../../app/domain/Validator"
import { DatasetError, EmptyValuesError } from "@modules/datasets/errors"
import { DATA_TYPES } from "@modules/schemas/constants"
import { ArrayValuesValidator } from "./ArrayValuesValidator"

interface Props {
  type: FieldDataType
}

export class EnumValuesValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    if (this.props.type.type === DATA_TYPES.ENUM) {
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
