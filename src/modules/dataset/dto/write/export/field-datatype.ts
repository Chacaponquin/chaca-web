import { ArgumentObject, RefWhere } from "@modules/dataset/domain/core/datatype"
import { DATA_TYPES } from "@modules/modules/domain/constants"
import { ExportDatasetFieldDTO } from "./field"

export type ExportDatatypeDTO =
  | ExportMixedDatatype
  | ExportRefDatatype
  | ExportCustomDatatype
  | ExportSingleValueDatatype
  | ExportSequenceDatatype
  | ExportSequentialDatatype
  | ExportEnumDatatype
  | ExportProbabilityDatatype
  | ExportPickDatatype

export interface ExportMixedDatatype {
  type: DATA_TYPES.MIXED
  object: ExportDatasetFieldDTO[]
}

export interface ExportRefDatatype {
  type: DATA_TYPES.REF
  ref: string
  unique: boolean
  where: RefWhere
}

export interface ExportCustomDatatype {
  type: DATA_TYPES.CUSTOM
  code: string
}

export interface ExportSingleValueDatatype {
  type: DATA_TYPES.MODULE_VALUE
  section: string
  module: string
  args: ArgumentObject
}

export interface ExportSequenceDatatype {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export interface ExportSequentialDatatype {
  type: DATA_TYPES.SEQUENTIAL
  values: unknown[]
  loop: boolean
}

export interface ExportEnumDatatype {
  type: DATA_TYPES.ENUM
  values: unknown[]
}

export interface ExportProbabilityDatatype {
  type: DATA_TYPES.PROBABILITY
  values: { value: unknown; chance: unknown }[]
}

export interface ExportPickDatatype {
  type: DATA_TYPES.PICK
  count: number
  values: unknown[]
}
