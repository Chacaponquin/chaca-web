import { ChacaError } from "@modules/app/exceptions"

export class InvalidConfigurationException extends ChacaError {
  constructor() {
    super({ id: "", msg: { en: "", es: "" } })
  }
}

export class InvalidVersionException extends ChacaError {
  constructor() {
    super({ id: "", msg: { en: "", es: "" } })
  }
}

export class InvalidDatasetsException extends ChacaError {
  constructor() {
    super({ id: "", msg: { en: "", es: "" } })
  }
}
