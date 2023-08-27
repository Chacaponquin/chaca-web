import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { FieldNode } from "./FieldNode"
import { Node } from "./Node"
import { DatasetName } from "@modules/datasets/value-object"

interface RootProps {
  name: DatasetName
  limit: number
}

export class RootNode extends Node {
  private _limit: number

  constructor({ limit, name }: RootProps) {
    super(name)
    this._limit = limit
  }

  public fields(): DatasetField[] {
    return this.nodes.map((el) => el.object())
  }

  public setField(field: FieldNode) {
    this.nodes.push(field)
  }

  public limit() {
    return this._limit
  }

  public setLimit(l: number) {
    this._limit = l
  }
}
