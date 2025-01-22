import { DATA_TYPES } from "@modules/modules/domain/constants"
import {
  ArgumentObject,
  CustomDatatype,
  EnumDatatype,
  PickDatatype,
  ProbabilityDatatype,
  RefDatatype,
  SequenceDatatype,
  SequentialDatatype,
} from "../domain/core/datatype"
import { IsArrayConfig, IsKeyConfig, PossibleNullConfig } from "../domain/core/field-config"

export type SaveFieldDTO = {
  name: string
  datatype: SaveFieldDatatype
  possibleNull: PossibleNullConfig
  isArray: IsArrayConfig
  isKey: IsKeyConfig
  id: string
}

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
