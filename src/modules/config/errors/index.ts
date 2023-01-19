import { SaveSchemaForm } from "../interfaces/config.iterface"

export class EmptyFormFieldError extends Error {
  constructor(public readonly key: keyof SaveSchemaForm) {
    super()
  }
}
