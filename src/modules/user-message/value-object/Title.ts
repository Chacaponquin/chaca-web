import { EmptyMessageTitleError } from "../errors"

export class Title {
  private _value: string

  constructor(value: string) {
    if (value.trim().length === 0) {
      throw new EmptyMessageTitleError()
    }

    this._value = value
  }

  public value() {
    return this._value
  }
}
