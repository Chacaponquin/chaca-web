import { IValidator } from "@modules/app/domain/validator1"
import { ChacaError } from "@modules/app/exceptions"
import { InvalidVersionException } from "@modules/dataset/errors/init-load"

interface Props {
  version: string
}

export class VersionValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): ChacaError | null {
    if (typeof this.props.version === "string") {
      return null
    } else {
      return new InvalidVersionException()
    }
  }
}
