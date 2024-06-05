import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { DeleteReceiveRef } from "./DeleteReceiveRef"

interface ExecuteProps {
  datasetId: string
  fieldId: string
  next(datasets: Dataset[]): void
}

export class DeleteField extends DatasetUseCase<ExecuteProps> {
  constructor(datasets: Dataset[], private readonly deleteRef: DeleteReceiveRef) {
    super(datasets)
  }

  execute({ datasetId, fieldId, next }: ExecuteProps): Dataset[] {
    const newDatasets = this.datasets.map((dat) => {
      if (dat.id === datasetId) {
        dat.deleteField(fieldId)
      }

      return dat
    })

    this.deleteRef.execute({ datasets: this.datasets, id: fieldId })

    next(newDatasets)

    return newDatasets
  }
}
