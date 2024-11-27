import { FieldDatatype } from "@modules/dataset/domain/core/datatype"
import { IValidator } from "../../../../app/domain/validator"
import { DatasetError, EmptyValuesError } from "@modules/dataset/errors/dataset"
import { DATA_TYPES } from "@modules/modules/domain/constants"
import { ArrayValuesValidator } from "./ArrayValuesValidator"

interface Props {
  type: FieldDatatype
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
