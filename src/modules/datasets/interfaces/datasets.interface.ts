import {
  DatasetField,
  FieldDataType,
  CustomDataType,
  MixedDataType,
  RefDataType,
  SingleValueDataType,
  SchemaValueTypeObject,
} from "./dataset_field.interface"

export interface ExportDataset {
  name: string
  id: string
  limit: number
  fields: DatasetField[]
}

export type {
  DatasetField,
  FieldDataType,
  CustomDataType,
  MixedDataType,
  RefDataType,
  SingleValueDataType,
  SchemaValueTypeObject,
}
