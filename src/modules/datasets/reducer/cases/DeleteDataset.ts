import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

export class DeleteDataset extends DatasetUseCase<string> {
  public execute(deleteDatasetId: string): Array<Dataset> {
    const newDatasets = this.datasets.filter((d) => d.id !== deleteDatasetId)
    this.deleteRefFields(newDatasets, deleteDatasetId)

    return newDatasets
  }

  private deleteRefFields(datasets: Array<Dataset>, datasetId: string): void {
    for (const dat of datasets) {
      const refFields = dat.refFields()

      for (const ref of refFields) {
        if (ref.dataType.ref[0] === datasetId) {
          ref.dataType.ref = []
        }
      }
    }
  }
}
