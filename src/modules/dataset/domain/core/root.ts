import { NodesUtils } from "./utils"
import { Schema } from "./dataset"
import { Id } from "@modules/shared/domain/id"
import { Field } from "./field"

interface Props {
  limit: number
  name: string
  id: string
}

export class RootNode {
  private _id: string
  private _limit: number
  private _name: string

  readonly utils = new NodesUtils(this)

  constructor({ limit, name, id }: Props) {
    this._limit = limit
    this._name = name
    this._id = id
  }

  clone(): Schema {
    const dataset = new Schema({ name: this.name, limit: this._limit, id: Id.generate() })

    const newNodes = this.utils.nodes.map((n) => n.clone())
    newNodes.forEach((n) => dataset.insertField(n))

    return dataset
  }

  get name() {
    return this._name
  }

  get limit() {
    return this._limit
  }

  get id() {
    return this._id
  }

  setName(name: string) {
    this._name = name
  }

  setField(field: Field) {
    this.utils.nodes.push(field)
  }

  setLimit(lim: number) {
    this._limit = lim
  }
}
