import { Dataset, RefNode } from "@modules/datasets/domain/core"
import { DatasetUseCase } from "./DatasetUseCase"
import { DATA_TYPES } from "@modules/schemas/constants"
import { DeleteReceiveRef } from "./DeleteReceiveRef"
import { FieldProps } from "@modules/datasets/dto/field"

interface ExecuteProps {
  datasetId: string
  form: FieldProps
  next(datasets: Dataset[]): void
}

export class EditField extends DatasetUseCase<ExecuteProps> {
  constructor(datasets: Dataset[], private readonly deleteRefs: DeleteReceiveRef) {
    super(datasets)
  }

  execute({ datasetId, form, next }: ExecuteProps): Dataset[] {
    const result = [] as Dataset[]

    for (const dataset of this.datasets) {
      if (dataset.id === datasetId) {
        const found = dataset.findFieldById(form.id)

        if (found) {
          if (found instanceof RefNode && form.datatype.type !== DATA_TYPES.REF) {
            this.deleteRefs.execute({ datasets: this.datasets, id: found.id })
          }

          dataset.findNodeByIdAndEdit(form)
        }
      }

      result.push(dataset)
    }

    next(result)

    return result
  }
}
