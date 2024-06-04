import { ChacaError } from "@modules/app/exceptions"

export class EmptyFilenameError extends ChacaError {
  constructor() {
    super({
      msg: {
        en: "You must insert a name for the file",
        es: "Debes insertar un nombre para el archivo",
      },
      id: "empty-image-filename",
    })
  }
}
