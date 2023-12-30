import { Dataset, Field } from "@modules/datasets/domain/tree"
import { FieldDataType } from "@modules/datasets/interfaces/dataset-field"
import { NodeProps } from "@modules/datasets/interfaces/tree"
import { DatasetUseCase } from "./DatasetUseCase"
import { MixedNode } from "@modules/datasets/domain/tree/Field"

interface ExecuteProps {
  datasetId: string
  parentId: string
  field: NodeProps<FieldDataType>
  next(datasets: Array<Dataset>): void
}

export class AddField extends DatasetUseCase<ExecuteProps> {
  public execute({ datasetId, field, parentId, next }: ExecuteProps): Array<Dataset> {
    const newNode = Field.create(field)

    const newDatasets = this.datasets.map((d) => {
      if (d.id === datasetId) {
        if (datasetId === parentId) {
          d.insertField(newNode)
        } else {
          const findParent = d.findFieldById(parentId)

          if (findParent && findParent instanceof MixedNode) {
            findParent.nodesUtils.insertNode(newNode)
          }
        }
      }

      return d
    })

    next(newDatasets)

    return newDatasets
  }
}
