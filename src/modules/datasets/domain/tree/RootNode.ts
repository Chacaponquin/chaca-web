import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets"
import { Field } from "./Field"
import { NodesUtils } from "./NodesUtils"
import { v4 as uuid } from "uuid"
import { SearchProps } from "@modules/datasets/interfaces/tree"
import { ExportDatatypeDTO } from "@modules/datasets/dto/field"
import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"

interface RootProps {
  limit: number
  name: string
}

export class RootNode {
  private _limit: number
  private _name: string
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
    return this._name
  }

  public fields(): DatasetField[] {
    return this.utils.nodes.map((el) => el.object())
  }

  public setName(name: string) {
    this._name = name
  }

  public setField(field: Field<FieldDataType, ExportDatatypeDTO>) {
    this.utils.nodes.push(field)
  }

  public limit() {
    return this._limit
  }

  public setLimit(l: number) {
    this._limit = l
  }

  public exportFields(props: SearchProps): ExportDatasetFieldDTO<ExportDatatypeDTO>[] {
    return this.utils.exportFields(props)
  }
}
