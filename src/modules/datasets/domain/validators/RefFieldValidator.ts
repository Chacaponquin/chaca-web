import { IValidator } from "@modules/app/domain"
import { ChacaError } from "@modules/app/exceptions"
import { EmptyRefFieldError } from "@modules/datasets/errors"
import { FieldDataType } from "@modules/datasets/interfaces/dataset-field"
import { DATA_TYPES } from "@modules/schemas/constants"

interface Props {
  type: FieldDataType
}

export class RefFieldValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): ChacaError | null {
    if (this.props.type.type === DATA_TYPES.REF) {
      if (this.props.type.ref.length <= 1) {
        return new EmptyRefFieldError()
      }
    }

    return null
  }
}
