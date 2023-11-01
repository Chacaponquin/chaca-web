import {
  DatasetField,
  FieldDataType,
  CustomDataType,
  MixedDataType,
  RefDataType,
  SingleValueDataType,
  SchemaValueTypeObject,
} from "./dataset_field"

export interface DatasetObject {
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
