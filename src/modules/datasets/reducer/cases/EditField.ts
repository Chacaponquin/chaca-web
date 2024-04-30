import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { FieldProps } from "@modules/datasets/dto/field"

interface ExecuteProps {
  datasetId: string
  form: FieldProps
  next(datasets: Dataset[]): void
}

export class EditField extends DatasetUseCase<ExecuteProps> {
  execute({ datasetId, form, next }: ExecuteProps): Dataset[] {
    const newDatasets = this.datasets.map((d) => {
      if (d.id === datasetId) {
        d.findNodeByIdAndEdit(form)
      }

      return d
    })

    next(newDatasets)

    return newDatasets
  }
}
