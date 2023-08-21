import { PasswordEmptyError } from "../errors"

export class Password {
  private _value: string

  constructor(password: string) {
    if (password.trim().length === 0) {
      throw new PasswordEmptyError()
    }

    this._value = password
  }

  public value() {
    return this._value
  }
}
