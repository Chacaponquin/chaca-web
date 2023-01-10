import { DATA_TYPES } from "../../constant/DATA_TYPES"
import { DatasetField, FieldDataType } from "../../interfaces/datasets.interface"
import { NodeInfo } from "../../interfaces/tree.interface"
import { Node } from "./Node"

export class FieldNode<T = FieldDataType> extends Node {
  public info: NodeInfo<T>

  constructor(name: string, info: NodeInfo<T>) {
    super(name)
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
