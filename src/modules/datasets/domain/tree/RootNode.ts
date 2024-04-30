import { Field } from "./Field"
import { NodesUtils } from "./NodesUtils"
import { v4 as uuid } from "uuid"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportDatatypeDTO } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { Dataset } from "./Dataset"

interface RootProps {
  limit: number
  name: string
}

export class RootNode {
  readonly id = uuid()
  private _limit: number
  private _name: string

  readonly utils = new NodesUtils(this)

  constructor({ limit, name }: RootProps) {
    this._limit = limit
    this._name = name
  }

  clone(): Dataset {
    const dataset = new Dataset({ name: this.name, limit: this._limit })

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

  setField(field: Field<ExportDatatypeDTO>) {
    this.utils.nodes.push(field)
  }

  limit() {
    return this._limit
  }

  public setLimit(lim: number) {
    this._limit = lim
  }

  exportFields(props: SearchProps): ExportDatasetFieldDTO<ExportDatatypeDTO>[] {
    return this.utils.exportFields(props)
  }
}
