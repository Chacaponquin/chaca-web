import { DatasetError, EmptyValuesError, InvalidChanceValue } from "@modules/datasets/errors"
import { IValidator } from "./Validator"
import { ArrayValuesValidator } from "./ArrayValuesValidator"
import { ArrayValue, FieldDataType } from "@modules/datasets/interfaces/dataset-field"
import { DATA_TYPES } from "@modules/schemas/constants"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"

interface Props {
  type: FieldDataType
}

export class ProbabilityValuesValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    if (this.props.type.type === DATA_TYPES.PROBABILITY) {
      if (this.props.type.values.length === 0) {
        return new EmptyValuesError()
      }

      const chances = this.props.type.values.map((v) => v.chance)
      const values = this.props.type.values.map((v) => v.value)

      const valuesError = this.validateValues(values)
      const chancesError = this.validateValues(chances)

      if (valuesError) {
        return valuesError
      }

      if (chancesError) {
        return chancesError
      }

      for (const chance of chances) {
        if (chance.type === ARRAY_VALUE_TYPE.NUMBER) {
          const number = Number(chance.value)

          if (!(number >= 0 && number <= 1)) {
            throw new InvalidChanceValue()
          }
        }
      }

      return null
    }

    return null
  }

  private validateValues(values: ArrayValue[]): DatasetError | null {
    const validator = new ArrayValuesValidator({
      values: values,
    })

    const error = validator.validate()

    if (error) {
      return error
    }

    return null
  }
}
