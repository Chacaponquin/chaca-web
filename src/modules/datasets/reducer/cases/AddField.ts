import { Dataset, Field, MixedNode } from "@modules/datasets/domain/tree"
import { NodeProps } from "@modules/datasets/interfaces/tree"
import { DatasetUseCase } from "./DatasetUseCase"

interface ExecuteProps {
  datasetId: string
  parentId: string
  field: NodeProps
  next(datasets: Dataset[]): void
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
            findParent.utils.insertNode(newNode)
          }
        }
      }

      return d
    })

    next(newDatasets)

    return newDatasets
  }
}
