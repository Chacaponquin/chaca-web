import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

export class DeleteDataset extends DatasetUseCase<string> {
  public execute(deletedatasetId: string): Array<Dataset> {
    const newDatasets = this.datasets.filter((d) => d.id !== deletedatasetId)
    this.deleteRefFields(newDatasets, deletedatasetId)

    return newDatasets
  }

  private deleteRefFields(datasets: Array<Dataset>, datasetId: string): void {
    for (const dat of datasets) {
      const refFields = dat.refFields()

      for (const ref of refFields) {
        if (ref.dataType.ref.includes(datasetId)) {
          ref.dataType.ref = []
        }
      }
    }
  }
}
