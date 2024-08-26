import {
  DatasetError,
  EmptyArrayValueError,
  InvalidArrayJSONValue,
  InvalidArrayNumberValue,
} from "@modules/datasets/errors/dataset"
import { IValidator } from "@modules/app/domain"
import { ArrayValue } from "@modules/datasets/domain/core/datatype"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/domain/constants"

interface Props {
  values: ArrayValue[]
}

export class ArrayValuesValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    for (const value of this.props.values) {
      value.value.trim()

      if (value.value.length === 0) {
        return new EmptyArrayValueError()
      } else if (value.type === ARRAY_VALUE_TYPE.NUMBER) {
        const number = Number(value.value)

        if (Number.isNaN(number)) {
          return new InvalidArrayNumberValue()
        }
      } else if (value.type === ARRAY_VALUE_TYPE.JSON) {
        try {
          JSON.parse(value.value)
        } catch (error) {
          return new InvalidArrayJSONValue()
        }
      }
    }

    return null
  }
}
