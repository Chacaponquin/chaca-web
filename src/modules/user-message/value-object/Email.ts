import { EmptyUserEmailError } from "../errors"

export class Email {
  private _value: string

  constructor(value: string) {
    if (value.trim().length === 0) {
      throw new EmptyUserEmailError()
    }

    this._value = value
  }

  public value() {
    return this._value
  }
}
