import { Validator } from "@modules/app/domain/validator"
import { FilenameValidator } from "@modules/config/domain/validators/filename"

interface Props {
  name: string
}

export class ExportDatasetValidator extends Validator {
  constructor({ name }: Props) {
    super([new FilenameValidator({ name: name })])
  }
}
