import { DatasetField } from "../../../modules/datasets/interfaces/datasets.interface"
import { FieldNode } from "./FieldNode"
import { Node } from "./Node"

export class RootNode extends Node {
  constructor(public limit: number, name: string) {
    super(name)
  }

  public getFields(): DatasetField[] {
    return this.nodes.map((el) => el.getNodeObject())
  }

  public setField(field: FieldNode) {
    this.nodes.push(field)
  }
}
