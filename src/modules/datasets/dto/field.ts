import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldDataType, RefWhere, SchemaValueTypeObject } from "../interfaces/dataset-field"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "../interfaces/field-config"
import { ExportDatasetFieldDTO } from "./dataset"

export interface FieldProps {
  id: string
  name: string
  isPossibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  dataType: FieldDataType
  isKey: IsKeyConfig
}

export interface ExportDatatypeDTO {}

export interface ExportMixedDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.MIXED
  object: ExportDatasetFieldDTO<ExportDatatypeDTO>[]
}

export interface ExportRefDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.REF
  ref: string
  unique: boolean
  where: RefWhere
}

export interface ExportCustomDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.CUSTOM
  code: string
}

export interface ExportSingleValueDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.SINGLE_VALUE
  fieldType: SchemaValueTypeObject
}

export interface ExportSequenceDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export interface ExportSequentialDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.SEQUENTIAL
  values: unknown[]
  loop: boolean
}

export interface ExportEnumDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.ENUM
  values: unknown[]
}

export interface ExportProbabilityDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.PROBABILITY
  values: Array<{ value: unknown; chance: unknown }>
}

export interface ExportPickDataType extends ExportDatatypeDTO {
  type: DATA_TYPES.PICK
  count: number
  values: unknown[]
}
