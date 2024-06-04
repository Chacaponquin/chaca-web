import { ChacaError } from "@modules/app/exceptions"

export class ConnectSockerError extends ChacaError {
  constructor() {
    super({ msg: { en: "Network connect error", es: "Error en la conexión" }, id: "network" })
  }
}
