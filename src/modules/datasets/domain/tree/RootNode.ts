import { Field } from "./Field"
import { NodesUtils } from "./NodesUtils"
import { Dataset } from "./Dataset"

interface Props {
  limit: number
  name: string
  id: string
}

export class RootNode {
  readonly id: string
  private _limit: number
  private _name: string

  readonly utils = new NodesUtils(this)

  constructor({ limit, name, id }: Props) {
    this._limit = limit
    this._name = name
    this.id = id
  }

  clone(): Dataset {
    const dataset = new Dataset({ name: this.name, limit: this._limit, id: this.id })

    const newNodes = this.utils.nodes.map((n) => n.clone())
    newNodes.forEach((n) => dataset.insertField(n))

    return dataset
  }

  get name() {
    return this._name
  }

  setName(name: string) {
    this._name = name
  }

  setField(field: Field) {
    this.utils.nodes.push(field)
  }

  get limit() {
    return this._limit
  }

  setLimit(lim: number) {
    this._limit = lim
  }
}
