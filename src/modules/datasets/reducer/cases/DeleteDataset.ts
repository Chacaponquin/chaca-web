import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

interface Props {
  datasetId: string
  next(datasets: Dataset[]): void
}

export class DeleteDataset extends DatasetUseCase<Props> {
  execute({ datasetId, next }: Props): Dataset[] {
    const newDatasets = this.datasets.filter((d) => d.id !== datasetId)
    this.deleteRefFields(newDatasets, datasetId)

    next(newDatasets)

    return newDatasets
  }

  private deleteRefFields(datasets: Dataset[], datasetId: string): void {
    for (const dat of datasets) {
      const refFields = dat.refFields()

      for (const ref of refFields) {
        if (ref.ref.includes(datasetId)) {
          ref.ref = []
        }
      }
    }
  }
}
