import { DatasetError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors/dataset"
import { IValidator } from "@modules/app/domain"
import { Dataset, MixedNode, RootNode } from "@modules/datasets/domain/tree"

interface Props {
  datasets: Dataset[]
  datasetId: string
  parentId: string
  fieldId: string | null
  name: string
}

export class NoDuplicateLevelField implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    const foundDataset = this.props.datasets.find((d) => d.id === this.props.datasetId)

    if (foundDataset) {
      let cont = 0
      const findParent = foundDataset.findNodeById(this.props.parentId)

      if (findParent) {
        if (findParent instanceof MixedNode || findParent instanceof RootNode) {
          const nodes = findParent.utils.nodes

          for (const node of nodes) {
            if (node.name === this.props.name && this.props.fieldId !== node.id) {
              cont++
            }
          }
        }
      }

      if (cont >= 1) {
        return new RepeatSameLevelFieldNameError()
      }
    }

    return null
  }
}
