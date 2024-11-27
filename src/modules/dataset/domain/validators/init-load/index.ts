import { Validator } from "@modules/app/domain/validator"
import { ContentTypeValidator } from "./ContentTypeValidator"
import { ISaveDataset } from "../../core/save"
import { VersionValidator } from "./VersionValidator"
import { DatasetsValidator } from "./DatasetsValidator"

interface Props {
  content: ISaveDataset
}

export class InitLoadValidator extends Validator {
  constructor({ content }: Props) {
    super([
      new ContentTypeValidator(content),
      new VersionValidator({ version: content.version }),
      new DatasetsValidator({ dataset: content.schemas }),
    ])
  }
}
