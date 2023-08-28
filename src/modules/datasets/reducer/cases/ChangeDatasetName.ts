import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { DatasetName } from "@modules/datasets/value-object"

interface ExecuteProps {
  datasetId: string
  newName: DatasetName
}

export class ChangeDatasetName extends DatasetUseCase<ExecuteProps> {
  public execute({ datasetId, newName }: ExecuteProps): Dataset[] {
    const newDatasets = this.datasets.map((dat) => {
      if (dat.id === datasetId) {
        dat.setName(newName)
      }

      return dat
    })

    return newDatasets
  }
}
