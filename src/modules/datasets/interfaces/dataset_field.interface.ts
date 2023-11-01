import { DATA_TYPES } from "@modules/schemas/constants"
import { IsArrayConfig } from "./field_config.interface"
import { ExportDatasetField } from "../dto/dataset"

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
  object: Array<ExportDatasetField<ExportDatatype>>
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
  ref: Array<string>
}

export interface SequenceDataType extends ExportDatatype {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export interface SequentialDataType extends ExportDatatype {
  type: DATA_TYPES.SEQUENTIAL
  values: Array<string>
}

export interface EnumDataType extends ExportDatatype {
  type: DATA_TYPES.ENUM
  values: Array<string>
}

export interface SchemaValueTypeObject {
  schema: string
  option: string
  args: ArgumentObject
}

export type ArgumentObject = Record<string, unknown>
