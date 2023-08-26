import { EmptyDatasetNameError } from "../errors"

export class DatasetName {
  private _value: string

  constructor(name: string) {
    if (name.trim() === "") throw new EmptyDatasetNameError()

    this._value = name
  }

  public value() {
    return this._value
  }
}
