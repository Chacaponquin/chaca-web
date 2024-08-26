import { IValidator } from "@modules/app/domain"
import { ChacaError } from "@modules/app/exceptions"
import { InputEmptyRefFieldError } from "@modules/datasets/errors/dataset"
import { FieldDatatype } from "@modules/datasets/domain/core/datatype"
import { DATA_TYPES } from "@modules/schemas/domain/constants"

interface Props {
  type: FieldDatatype
}

export class RefFieldValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): ChacaError | null {
    if (this.props.type.type === DATA_TYPES.REF) {
      if (this.props.type.ref.length <= 1) {
        return new InputEmptyRefFieldError()
      }
    }

    return null
  }
}
