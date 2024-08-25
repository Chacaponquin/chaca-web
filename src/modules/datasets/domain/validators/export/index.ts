import { Validator } from "@modules/app/domain"
import { FilenameValidator } from "@modules/config/domain/validators/FileNameValidator"

interface Props {
  name: string
}

export class ExportDatasetValidator extends Validator {
  constructor({ name }: Props) {
    super([new FilenameValidator({ name: name })])
  }
}
