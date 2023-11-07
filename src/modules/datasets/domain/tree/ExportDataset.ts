import { ExportDatasetField } from "@modules/datasets/dto/dataset"
import { ExportDatatype } from "@modules/datasets/interfaces/dataset-field"

export interface ExportDatasetProps {
  name: string
  limit: number
  fields: Array<ExportDatasetField<ExportDatatype>>
}

export class ExportDataset {
  private _name: string
  private _limit: number
  private _fields: Array<ExportDatasetField<ExportDatatype>>

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
