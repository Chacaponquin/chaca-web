import { Validator } from "@modules/app/domain"
import { Dataset } from "../../dataset"
import { DatasetNameValidator } from "./DatasetNameValidator"
import { NoDuplicateDataset } from "./NoDuplicateDataset"

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
