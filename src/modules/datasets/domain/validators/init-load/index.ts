import { Validator } from "@modules/app/domain"
import { ContentTypeValidator } from "./ContentTypeValidator"
import { ISaveDatasets } from "../../dataset/SaveDataset"
import { VersionValidator } from "./VersionValidator"
import { DatasetsValidator } from "./DatasetsValidator"

interface Props {
  content: ISaveDatasets
}

export class InitLoadValidator extends Validator {
  constructor({ content }: Props) {
    super([
      new ContentTypeValidator(content),
      new VersionValidator({ version: content.version }),
      new DatasetsValidator({ datasets: content.datasets }),
    ])
  }
}
