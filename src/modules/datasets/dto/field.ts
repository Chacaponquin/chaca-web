import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldDatatype, RefWhere, SchemaValueTypeObject } from "../interfaces/dataset-field"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "../interfaces/field-config"
import { ExportDatasetFieldDTO } from "./dataset"

export interface FieldProps {
  id: string
  name: string
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  dataType: FieldDatatype
  isKey: IsKeyConfig
}

export type ExportDatatypeDTO =
  | ExportMixedDataType
  | ExportRefDataType
  | ExportCustomDataType
  | ExportSingleValueDataType
  | ExportSequenceDataType
  | ExportSequentialDataType
  | ExportEnumDataType
  | ExportProbabilityDataType
  | ExportPickDataType

export interface ExportMixedDataType {
  type: DATA_TYPES.MIXED
  object: ExportDatasetFieldDTO[]
}

export interface ExportRefDataType {
  type: DATA_TYPES.REF
  ref: string
  unique: boolean
  where: RefWhere
}

export interface ExportCustomDataType {
  type: DATA_TYPES.CUSTOM
  code: string
}

export interface ExportSingleValueDataType {
  type: DATA_TYPES.SINGLE_VALUE
  fieldType: SchemaValueTypeObject
}

export interface ExportSequenceDataType {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export interface ExportSequentialDataType {
  type: DATA_TYPES.SEQUENTIAL
  values: unknown[]
  loop: boolean
}

export interface ExportEnumDataType {
  type: DATA_TYPES.ENUM
  values: unknown[]
}

export interface ExportProbabilityDataType {
  type: DATA_TYPES.PROBABILITY
  values: Array<{ value: unknown; chance: unknown }>
}

export interface ExportPickDataType {
  type: DATA_TYPES.PICK
  count: number
  values: unknown[]
}
