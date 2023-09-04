import { EmptyUserMessageError } from "../errors"

export class Message {
  private _value: string

  constructor(value: string) {
    if (value.trim().length === 0) {
      throw new EmptyUserMessageError()
    }

    this._value = value.trim()
  }

  public value() {
    return this._value
  }
}
