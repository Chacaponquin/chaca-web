import { SaveSchemaForm } from "../interfaces/config.iterface"

export class EmptyFormFieldError extends Error {
  constructor(public readonly key: keyof SaveSchemaForm) {
    super()
  }
}

export class RepeatTagError extends Error {
  constructor(public readonly tag: string) {
    super()
  }
}
