import { Validator } from "@modules/app/domain"
import { FileNameValidator } from "@modules/config/domain/validators"

interface Props {
  name: string
}

export class ExportDatasetValidator extends Validator {
  constructor({ name }: Props) {
    super([new FileNameValidator({ name: name })])
  }
}
