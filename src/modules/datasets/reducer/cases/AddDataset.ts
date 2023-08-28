import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { DatasetName } from "@modules/datasets/value-object"

interface ExecuteProps {
  datasetName: DatasetName
}

export class AddDataset extends DatasetUseCase<ExecuteProps> {
  public execute({ datasetName }: ExecuteProps): Dataset[] {
    const dataset = new Dataset({ name: datasetName })
    return [...this.datasets, dataset]
  }
}
