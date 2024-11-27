import { IValidator } from "@modules/app/domain/validator1"
import { ChacaError } from "@modules/app/exceptions"
import { InvalidConfigurationException } from "@modules/dataset/errors/init-load"

export class ContentTypeValidator implements IValidator {
  constructor(private readonly content: unknown) {}

  validate(): ChacaError | null {
    if (this.content) {
      if (
        typeof this.content === "object" &&
        "version" in this.content &&
        "schemas" in this.content
      ) {
        return null
      }
    }

    return new InvalidConfigurationException()
  }
}
