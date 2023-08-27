export abstract class NameValidator {
  private _value: string

  constructor(name: string) {
    this._value = this.validate(name)
  }

  protected abstract validate(name: string): string

  public value() {
    return this._value
  }
}
