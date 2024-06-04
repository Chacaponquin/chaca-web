import { Languages, TranslationConfig } from "../modules/language/interfaces"

interface Props {
  msg: TranslationConfig<string>
  id: string
}

export class ChacaError extends Error {
  readonly _msg: TranslationConfig<string>
  readonly id: string

  constructor({ id, msg }: Props) {
    super()
    this.id = id
    this._msg = msg
  }

  getMessage(language: Languages): string {
    return this._msg[language]
  }
}
