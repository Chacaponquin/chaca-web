import { Validator } from "@modules/app/domain/validator"
import { ImageFilenameValidator } from "./image-filename"

interface Props {
  name: string
}

export class ExportDatasetImageValidator extends Validator {
  constructor({ name }: Props) {
    super([new ImageFilenameValidator({ name: name })])
  }
}
