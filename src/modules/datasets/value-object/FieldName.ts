import { EmptyFieldNameError } from "../errors"

export class FieldName {
  private _value: string

  constructor(name: string) {
    if (name.trim() === "") {
      throw new EmptyFieldNameError()
    }

    this._value = name
  }

  public value() {
    return this._value
  }
}
