import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { NodeInfo } from "@modules/datasets/interfaces/tree.interface"
import { Node } from "./Node"

export class FieldNode<T = FieldDataType> extends Node {
  public info: NodeInfo<T>

  constructor(info: NodeInfo<T>) {
    super(info.name)
    this.info = info
  }

  public getNodeObject(): DatasetField<T> {
    if (this.nodes.length === 0) {
      return { ...this.info, id: this.id, name: this.name }
    } else {
      return {
        ...this.info,
        id: this.id,
        name: this.name,
        dataType: {
          object: this.nodes.map((el) => el.getNodeObject()),
          type: DATA_TYPES.MIXED,
        },
      } as DatasetField<T>
    }
  }
}
