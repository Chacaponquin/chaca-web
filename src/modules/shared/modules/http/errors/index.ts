import { LanguageConfig } from "@modules/shared/modules/app/interfaces/language.interface"

export class FetchError extends Error {}

export class RequiredFormFieldError extends Error {
  constructor(public readonly fieldTraduction: LanguageConfig) {
    super()
  }
}
