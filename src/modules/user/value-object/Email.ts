import { EmailEmptyError } from "../errors"

export class Email {
  private _value: string

  constructor(email: string) {
    if (email.length === 0) {
      throw new EmailEmptyError()
    }

    this._value = email
  }

  public value() {
    return this._value
  }
}
