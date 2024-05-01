import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"

interface ExecuteProps {
  datasetId: string
  fieldId: string
  next(datasets: Dataset[]): void
}

export class DeleteField extends DatasetUseCase<ExecuteProps> {
  public execute({ datasetId, fieldId, next }: ExecuteProps): Dataset[] {
    const newDatasets = this.datasets.map((dat) => {
      if (dat.id === datasetId) {
        dat.deleteField(fieldId)
      }

      return dat
    })

    this.deleteRefFields(this.datasets, fieldId)

    next(newDatasets)

    return newDatasets
  }

  private deleteRefFields(datasets: Dataset[], id: string): void {
    for (const dat of datasets) {
      const refFields = dat.refFields()

      for (const ref of refFields) {
        if (ref.ref.includes(id)) {
          ref.ref = []
        }
      }
    }
  }
}
