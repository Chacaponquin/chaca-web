import { EmptyFieldNameError } from "../errors"
import { NameValidator } from "./NameValidator"

export class FieldName extends NameValidator {
  constructor(name: string) {
    super(name)
  }

  protected validate(name: string): string {
    if (name.trim() === "") {
      throw new EmptyFieldNameError()
    }

    return name.trim()
  }
}
