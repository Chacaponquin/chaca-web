import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

interface ExecuteProps {
  datasetId: string
  newName: string
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
