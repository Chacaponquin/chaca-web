import { ARRAY_VALUE_TYPE } from "@modules/datasets/domain/constants"
import { ArrayValue } from "@modules/datasets/domain/core/datatype"

export class ValueMapper {
  map(value: ArrayValue): unknown {
    if (value.type === ARRAY_VALUE_TYPE.JSON) {
      return JSON.parse(value.value)
    } else if (value.type === ARRAY_VALUE_TYPE.NUMBER) {
      return Number(value.value)
    } else {
      return value.value
    }
  }
}
