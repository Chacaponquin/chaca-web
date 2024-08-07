import { Validator } from "@modules/app/domain"
import { FileNameValidator } from "./FileNameValidator"
import { ImageFilenameValidator } from "./ImageFilenameValidator"

interface Props {
  name: string
}

export class ExportDatasetImageValidator extends Validator {
  constructor({ name }: Props) {
    super([new ImageFilenameValidator({ name: name })])
  }
}

export { FileNameValidator }
