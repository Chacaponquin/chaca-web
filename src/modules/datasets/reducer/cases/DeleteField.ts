import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

interface ExecuteProps {
  datasetId: string
  fieldId: string
}

export class DeleteField extends DatasetUseCase<ExecuteProps> {
  public execute({ datasetId, fieldId }: ExecuteProps): Dataset[] {
    const newDatasets = this.datasets.map((dat) => {
      if (dat.id === datasetId) {
        dat.deleteField(fieldId)
      }

      return dat
    })

    return newDatasets
  }
}
