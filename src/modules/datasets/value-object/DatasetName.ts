import { EmptyDatasetNameError } from "../errors"
import { NameValidator } from "./NameValidator"

export class DatasetName extends NameValidator {
  constructor(name: string) {
    super(name)
  }

  protected validate(name: string): string {
    if (name.trim() === "") throw new EmptyDatasetNameError()

    return name.trim()
  }
}
