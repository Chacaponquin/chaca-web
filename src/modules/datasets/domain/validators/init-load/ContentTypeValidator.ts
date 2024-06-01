import { IValidator } from "@modules/app/domain"
import { ChacaError } from "@modules/app/exceptions"
import { InvalidConfigurationException } from "@modules/datasets/errors/init-load"

export class ContentTypeValidator implements IValidator {
  constructor(private readonly content: unknown) {}

  validate(): ChacaError | null {
    if (this.content) {
      if (
        typeof this.content === "object" &&
        "version" in this.content &&
        "datasets" in this.content
      ) {
        return null
      }
    }

    return new InvalidConfigurationException()
  }
}
