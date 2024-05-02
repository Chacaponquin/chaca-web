import { Validator } from "@modules/app/domain"
import { NoDuplicateDataset } from "./NoDuplicateDataset"
import { DatasetNameValidator } from "./DatasetNameValidator"
import { Dataset } from "../tree"

interface Props {
  datasets: Dataset[]
  name: string
  datasetId: string
}

export class DatasetValidator extends Validator {
  constructor({ datasetId, datasets, name }: Props) {
    super([
      new DatasetNameValidator({ name: name }),
      new NoDuplicateDataset({ datasets: datasets, name: name, id: datasetId }),
    ])
  }
}
