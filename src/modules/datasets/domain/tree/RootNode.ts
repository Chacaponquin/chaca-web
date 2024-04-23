import { DatasetField } from "@modules/datasets/interfaces/datasets"
import { Field } from "./Field"
import { NodesUtils } from "./NodesUtils"
import { DatasetName } from "@modules/datasets/value-object"
import { v4 as uuid } from "uuid"
import { ExportDatasetField } from "@modules/datasets/dto/dataset"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportDatatype, FieldDataType } from "@modules/datasets/interfaces/dataset-field"

interface RootProps {
  limit: number
  name: DatasetName
}

export class RootNode {
  private _limit: number
  private _name: DatasetName
  private _id = uuid()

  public utils = new NodesUtils(this)

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
    return this.utils.nodes.map((el) => el.object())
  }

  public setName(name: DatasetName) {
    this._name = name
  }

  public setField(field: Field<FieldDataType, ExportDatatype>) {
    this.utils.nodes.push(field)
  }

  public limit() {
    return this._limit
  }

  public setLimit(l: number) {
    this._limit = l
  }

  public exportFields(props: SearchProps): Array<ExportDatasetField<ExportDatatype>> {
    return this.utils.exportFields(props)
  }
}
