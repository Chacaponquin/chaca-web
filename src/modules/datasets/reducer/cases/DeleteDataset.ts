import { Dataset } from "@modules/datasets/domain/tree"

export class DeleteDataset {
  constructor(
    private readonly datasets: Array<Dataset>,
    private readonly deleteDatasetId: string,
  ) {}

  public execute(): Array<Dataset> {
    const newDatasets = this.datasets.filter((d) => d.id !== this.deleteDatasetId)
    this.deleteRefFields(newDatasets)

    return newDatasets
  }

  private deleteRefFields(datasets: Array<Dataset>): void {
    for (const dat of datasets) {
      const refFields = dat.refFields()

      for (const ref of refFields) {
        if (ref.dataType.ref[0] === this.deleteDatasetId) {
          ref.dataType.ref = []
        }
      }
    }
  }
}
