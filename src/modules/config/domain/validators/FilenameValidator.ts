import { IValidator } from "@modules/app/domain"
import { ChacaError } from "@modules/app/exceptions"
import { EmptyFilenameError } from "@modules/config/exceptions"

interface Props {
  name: string
}

export class FilenameValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): ChacaError | null {
    if (this.props.name.trim().length === 0) {
      return new EmptyFilenameError()
    }

    return null
  }
}
