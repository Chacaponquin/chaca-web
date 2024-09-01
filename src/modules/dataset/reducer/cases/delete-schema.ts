import { Schema } from "@modules/dataset/domain/core"
import { DatasetUseCase } from "./base-use-case"
import { DeleteReceiveRef } from "./delete-receive-ref"

interface Props {
  schemaId: string
  next(dataset: Schema[]): void
}

export class DeleteSchema extends DatasetUseCase<Props> {
  constructor(dataset: Schema[], private readonly deleteRefs: DeleteReceiveRef) {
    super(dataset)
  }

  execute({ schemaId, next }: Props): Schema[] {
    const newDataset = this.dataset.filter((d) => d.id !== schemaId)

    this.deleteRefs.execute({ dataset: newDataset, id: schemaId })

    next(newDataset)

    return newDataset
  }
}
