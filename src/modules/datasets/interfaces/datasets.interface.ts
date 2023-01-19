import { DATA_TYPES } from "../../schemas/constants/DATA_TYPES"

export interface Dataset {
  name: string
  id: string
  limit: number
  fields: DatasetField[]
}

export type FieldDataType = CustomDataType | MixedDataType | SingleValueDataType | RefDataType

export type CustomDataType = {
  type: DATA_TYPES.CUSTOM
  code: string
}
export type MixedDataType = {
  type: DATA_TYPES.MIXED
  object: DatasetField[]
}
export type SingleValueDataType = {
  type: DATA_TYPES.SINGLE_VALUE
  fieldType: TypeSchema
}
export type RefDataType = {
  type: DATA_TYPES.REF
  ref: string[]
}

export interface DatasetField<T = FieldDataType> {
  name: string
  id: string
  dataType: T
  isPosibleNull: number
  isArray: {
    min: number
    max: number
  } | null
}

export interface TypeSchema {
  parent: string
  type: string
  args: { [key: string]: unknown }
}
