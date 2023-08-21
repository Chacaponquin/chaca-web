import { UsernameShortError } from "../errors"

export class Username {
  private _value: string

  constructor(username: string) {
    if (username.trim().length < 7) {
      throw new UsernameShortError()
    }

    this._value = username
  }

  public value() {
    return this._value
  }
}
