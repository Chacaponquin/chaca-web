import { DATA_TYPES } from "@modules/schemas/constants"
import { IsArrayConfig } from "./field-config"
import { ExportDatasetField } from "../dto/dataset"
import { ARRAY_VALUE_TYPE } from "../constants"

export interface ExportDatatype {}

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

export interface ExportMixedDataType extends ExportDatatype {
  type: DATA_TYPES.MIXED
  object: ExportDatasetField<ExportDatatype>[]
}

export interface ExportRefDataType extends ExportDatatype {
  type: DATA_TYPES.REF
  ref: string
}

export interface CustomDataType extends ExportDatatype {
  type: DATA_TYPES.CUSTOM
  code: string
}

export interface MixedDataType {
  type: DATA_TYPES.MIXED
  object: DatasetField[]
}

export interface SingleValueDataType extends ExportDatatype {
  type: DATA_TYPES.SINGLE_VALUE
  fieldType: SchemaValueTypeObject
}

export interface RefDataType {
  type: DATA_TYPES.REF
  ref: string[]
  unique: boolean
}

export interface SequenceDataType extends ExportDatatype {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export interface SequentialDataType extends ExportDatatype {
  type: DATA_TYPES.SEQUENTIAL
  values: ArrayValue[]
  loop: boolean
}

export interface EnumDataType extends ExportDatatype {
  type: DATA_TYPES.ENUM
  values: ArrayValue[]
}

export interface ProbabilityDataType {
  type: DATA_TYPES.PROBABILITY
  values: unknown[]
  chances: Array<number | string>
}

export interface PickDataType {
  type: DATA_TYPES.PICK
  count: number
  values: unknown[]
}

export interface SchemaValueTypeObject {
  schema: string
  option: string
  args: ArgumentObject
}

export type ArgumentObject = Record<string, unknown>

export type ArrayValue = {
  type: ARRAY_VALUE_TYPE
  value: unknown
}
