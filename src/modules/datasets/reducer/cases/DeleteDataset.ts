import { Dataset } from "@modules/datasets/domain/dataset"
import { DatasetUseCase } from "./DatasetUseCase"
import { DeleteReceiveRef } from "./DeleteReceiveRef"

interface Props {
  datasetId: string
  next(datasets: Dataset[]): void
}

export class DeleteDataset extends DatasetUseCase<Props> {
  constructor(datasets: Dataset[], private readonly deleteRefs: DeleteReceiveRef) {
    super(datasets)
  }

  execute({ datasetId, next }: Props): Dataset[] {
    const newDatasets = this.datasets.filter((d) => d.id !== datasetId)

    this.deleteRefs.execute({ datasets: newDatasets, id: datasetId })

    next(newDatasets)

    return newDatasets
  }
}
