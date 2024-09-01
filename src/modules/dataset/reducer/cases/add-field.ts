import { Schema, Field, MixedNode } from "@modules/dataset/domain/core"
import { NodeProps } from "@modules/dataset/interfaces/dataset"
import { DatasetUseCase } from "./base-use-case"

interface ExecuteProps {
  schemaId: string
  parentId: string
  field: NodeProps
  next(dataset: Schema[]): void
}

export class AddField extends DatasetUseCase<ExecuteProps> {
  public execute({ schemaId, field, parentId, next }: ExecuteProps): Array<Schema> {
    const newNode = Field.create(field)

    const newDataset = this.dataset.map((d) => {
      if (d.id === schemaId) {
        if (schemaId === parentId) {
          d.insertField(newNode)
        } else {
          const findParent = d.findFieldById(parentId)

          if (findParent && findParent instanceof MixedNode) {
            findParent.utils.insertNode(newNode)
          }
        }
      }

      return d
    })

    next(newDataset)

    return newDataset
  }
}
