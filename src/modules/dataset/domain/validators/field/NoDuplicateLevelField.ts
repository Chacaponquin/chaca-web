import { DatasetError, RepeatSameLevelFieldNameError } from "@modules/dataset/errors/dataset"
import { IValidator } from "@modules/app/domain/validator"
import { Schema } from "../../core/schema"
import { MixedNode } from "../../core/field"
import { RootNode } from "../../core/root-node"

interface Props {
  dataset: Schema[]
  schemaId: string
  parentId: string
  fieldId: string | null
  name: string
}

export class NoDuplicateLevelField implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): DatasetError | null {
    const foundDataset = this.props.dataset.find((d) => d.id === this.props.schemaId)

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
