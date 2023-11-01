import { DatasetField } from "@modules/datasets/interfaces/datasets"
import { FieldNode } from "./FieldNode"
import { NodesUtils } from "./NodesUtils"
import { DatasetName } from "@modules/datasets/value-object"
import { v4 as uuid } from "uuid"
import { ExportDatasetField } from "@modules/datasets/dto/dataset"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportDatatype, FieldDataType } from "@modules/datasets/interfaces/dataset_field"

interface RootProps {
  limit: number
  name: DatasetName
}

export class RootNode {
  private _limit: number
  private _name: DatasetName
  private _id = uuid()

  public nodesUtils = new NodesUtils(this)

  constructor({ limit, name }: RootProps) {
    this._limit = limit
    this._name = name
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name.value()
  }

  public fields(): DatasetField[] {
    return this.nodesUtils.nodes.map((el) => el.object())
  }

  public setName(name: DatasetName) {
    this._name = name
  }

  public setField(field: FieldNode<FieldDataType, ExportDatatype>) {
    this.nodesUtils.nodes.push(field)
  }

  public limit() {
    return this._limit
  }

  public setLimit(l: number) {
    this._limit = l
  }

  public exportFields(props: SearchProps): Array<ExportDatasetField<ExportDatatype>> {
    return this.nodesUtils.exportFields(props)
  }
}
