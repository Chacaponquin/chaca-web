import {
  DatasetField,
  FieldDataType,
  CustomDataType,
  MixedDataType,
  RefDataType,
  SingleValueDataType,
  TypeSchema,
} from "./dataset_field.interface"

export interface Dataset {
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
  TypeSchema,
}
