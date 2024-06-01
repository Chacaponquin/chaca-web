import { IValidator } from "@modules/app/domain"
import { ChacaError } from "@modules/app/exceptions"
import { EmptyCustomFunctionError } from "@modules/datasets/errors/dataset"
import { FieldDatatype } from "@modules/datasets/interfaces/dataset-field"
import { DATA_TYPES } from "@modules/schemas/constants"

interface Props {
  type: FieldDatatype
}

export class CustomFieldValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): ChacaError | null {
    if (this.props.type.type === DATA_TYPES.CUSTOM) {
      if (this.props.type.code.trim() === "") {
        return new EmptyCustomFunctionError()
      }
    }

    return null
  }
}
