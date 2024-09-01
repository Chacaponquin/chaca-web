import { Schema } from "@modules/dataset/domain/core"
import { DatasetUseCase } from "./base-use-case"
import { DeleteReceiveRef } from "./delete-receive-ref"

interface ExecuteProps {
  schemaId: string
  fieldId: string
  next(dataset: Schema[]): void
}

export class DeleteField extends DatasetUseCase<ExecuteProps> {
  constructor(dataset: Schema[], private readonly deleteRef: DeleteReceiveRef) {
    super(dataset)
  }

  execute({ schemaId, fieldId, next }: ExecuteProps): Schema[] {
    const newDataset = this.dataset.map((dat) => {
      if (dat.id === schemaId) {
        dat.deleteField(fieldId)
      }

      return dat
    })

    this.deleteRef.execute({ dataset: this.dataset, id: fieldId })

    next(newDataset)

    return newDataset
  }
}
