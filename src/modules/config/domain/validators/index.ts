import { Validator } from "@modules/app/domain/validator1"
import { ImageFilenameValidator } from "./ImageFilenameValidator"

interface Props {
  name: string
}

export class ExportDatasetImageValidator extends Validator {
  constructor({ name }: Props) {
    super([new ImageFilenameValidator({ name: name })])
  }
}
