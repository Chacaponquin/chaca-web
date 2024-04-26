import { DATA_TYPES } from "@modules/schemas/constants"
import { IsArrayConfig } from "./field-config"
import { ARRAY_VALUE_TYPE } from "../constants"

export interface DatasetField<T = FieldDataType> {
  name: string
  id: string
  dataType: T
  isPossibleNull: number
  isArray: IsArrayConfig
  isKey: boolean
}

export type FieldDataType =
  | CustomDataType
  | SingleValueDataType
  | RefDataType
  | SequenceDataType
  | SequentialDataType
  | EnumDataType
  | MixedDataType
  | ProbabilityDataType
  | PickDataType

export interface CustomDataType {
  type: DATA_TYPES.CUSTOM
  code: string
}

export interface MixedDataType {
  type: DATA_TYPES.MIXED
  object: DatasetField[]
}

export interface SingleValueDataType {
  type: DATA_TYPES.SINGLE_VALUE
  fieldType: SchemaValueTypeObject
}

export interface RefDataType {
  type: DATA_TYPES.REF
  ref: string[]
  unique: boolean
}

export interface SequenceDataType {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export interface SequentialDataType {
  type: DATA_TYPES.SEQUENTIAL
  values: ArrayValue[]
  loop: boolean
}

export interface EnumDataType {
  type: DATA_TYPES.ENUM
  values: ArrayValue[]
}

export interface ProbabilityDataType {
  type: DATA_TYPES.PROBABILITY
  values: ProbabilityValue[]
}

export interface ProbabilityValue {
  value: ArrayValue
  chance: ArrayValue
}

export interface PickDataType {
  type: DATA_TYPES.PICK
  count: number
  values: ArrayValue[]
}

export interface SchemaValueTypeObject {
  schema: string
  option: string
  args: ArgumentObject
}

export type ArgumentObject = Record<string, unknown>

export type ArrayValue = {
  type: ARRAY_VALUE_TYPE
  value: string
}
