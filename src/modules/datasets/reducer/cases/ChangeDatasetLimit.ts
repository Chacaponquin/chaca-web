import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

interface ExecuteProps {
  limit: number
  datasetId: string
}

export class ChangeDatasetLimit extends DatasetUseCase<ExecuteProps> {
  public execute({ datasetId, limit }: ExecuteProps): Dataset[] {
    const newDatasets = this.datasets.map((dat) => {
      if (dat.id === datasetId) {
        dat.setLimit(limit)
      }

      return dat
    })

    return newDatasets
  }
}
