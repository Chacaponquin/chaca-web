import { DATA_TYPES } from "@modules/schemas/constants"
import { IsArrayConfig } from "./field_config.interface"

export interface DatasetField<T = FieldDataType> {
  name: string
  id: string
  dataType: T
  isPosibleNull: number
  isArray: IsArrayConfig
  isKey: boolean
}

export type FieldDataType =
  | CustomDataType
  | MixedDataType
  | SingleValueDataType
  | RefDataType
  | SequenceDataType
  | SequentialDataType
  | EnumDataType

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
  fieldType: SchemaValueTypeObject
}

export type RefDataType = {
  type: DATA_TYPES.REF
  ref: string[]
}

export type SequenceDataType = {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export type SequentialDataType = {
  type: DATA_TYPES.SEQUENTIAL
  values: Array<string>
}

export type EnumDataType = {
  type: DATA_TYPES.ENUM
  values: Array<string>
}

export interface SchemaValueTypeObject {
  parent: string
  type: string
  args: ArgumentObject
}

export type ArgumentObject = Record<string, unknown>
