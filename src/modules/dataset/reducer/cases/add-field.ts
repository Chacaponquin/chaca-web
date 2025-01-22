import { NodeProps } from "@modules/dataset/domain/core/dataset-props"
import { DatasetUseCase } from "./base-use-case"
import { Schema } from "@modules/dataset/domain/core/schema"
import { Field, MixedNode } from "@modules/dataset/domain/core/field"

interface ExecuteProps {
  schemaId: string
  parentId: string
  field: NodeProps
  next(dataset: Schema[]): void
}

export class AddField extends DatasetUseCase<ExecuteProps> {
  public execute({ schemaId, field, parentId, next }: ExecuteProps): Schema[] {
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
