import { IValidator } from "@modules/app/domain/validator"
import { ChacaError } from "@modules/app/exceptions"
import { SaveSchema } from "../../core/save"
import { InvalidDatasetsException } from "@modules/dataset/errors/init-load"

interface Props {
  dataset: SaveSchema[]
}

export class DatasetsValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): ChacaError | null {
    if (Array.isArray(this.props.dataset)) {
      return null
    } else {
      return new InvalidDatasetsException()
    }
  }
}
