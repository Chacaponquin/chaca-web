import {
  ArgumentObject,
  CustomDatatype,
  EnumDatatype,
  PickDatatype,
  ProbabilityDatatype,
  RefDatatype,
  SequenceDatatype,
  SequentialDatatype,
} from "@modules/dataset/domain/core/datatype"
import { DATA_TYPES } from "@modules/modules/domain/constants"
import { SaveFieldDTO } from "./field"

export type SaveFieldDatatype =
  | CustomDatatype
  | SaveSingleValueDatatype
  | RefDatatype
  | SequenceDatatype
  | SequentialDatatype
  | EnumDatatype
  | SaveMixedDatatype
  | ProbabilityDatatype
  | PickDatatype

export interface SaveSingleValueDatatype {
  type: DATA_TYPES.MODULE_VALUE
  module: string
  section: string
  args: ArgumentObject
}

export interface SaveMixedDatatype {
  type: DATA_TYPES.MIXED
  object: SaveFieldDTO[]
}
