import { ExportDatasetFieldDTO } from "@modules/datasets/dto/dataset"
import { ExportDatatypeDTO } from "@modules/datasets/dto/field"

export interface ExportDatasetProps {
  name: string
  limit: number
  fields: ExportDatasetFieldDTO<ExportDatatypeDTO>[]
}

export class ExportDataset {
  private _name: string
  private _limit: number
  private _fields: ExportDatasetFieldDTO<ExportDatatypeDTO>[]

  constructor({ name, limit, fields }: ExportDatasetProps) {
    this._name = name
    this._limit = limit
    this._fields = fields
  }

  get name() {
    return this._name
  }

  get limit() {
    return this._limit
  }

  get fields() {
    return this._fields
  }
}
