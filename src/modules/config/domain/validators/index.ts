import { Validator } from "@modules/app/domain/validator"
import { ImageFilenameValidator } from "./ImageFilenameValidator"

interface Props {
  name: string
}

export class ExportDatasetImageValidator extends Validator {
  constructor({ name }: Props) {
    super([new ImageFilenameValidator({ name: name })])
  }
}
