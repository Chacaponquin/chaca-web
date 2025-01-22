import { DATA_TYPES } from "@modules/modules/domain/constants"
import { ARRAY_VALUE_TYPE } from "../constants"
import { NodeProps } from "../../interfaces/dataset"
import { Module } from "@modules/modules/domain/core/module"
import { ModuleSection } from "@modules/modules/domain/core/module-section"

export type FieldDatatype =
  | CustomDatatype
  | ModuleValueDatatype
  | RefDatatype
  | SequenceDatatype
  | SequentialDatatype
  | EnumDatatype
  | MixedDatatype
  | ProbabilityDatatype
  | PickDatatype

export interface CustomDatatype {
  type: DATA_TYPES.CUSTOM
  code: string
}

export interface MixedDatatype {
  type: DATA_TYPES.MIXED
  object: NodeProps[]
}

export interface ModuleValueDatatype {
  type: DATA_TYPES.MODULE_VALUE
  section: ModuleSection
  module: Module
  args: ArgumentObject
}

export interface RefDatatype {
  type: DATA_TYPES.REF
  ref: string[]
  unique: boolean
  where: RefWhere
}

export type RefWhere = string | null

export interface SequenceDatatype {
  type: DATA_TYPES.SEQUENCE
  startsWith: number
  step: number
}

export interface SequentialDatatype {
  type: DATA_TYPES.SEQUENTIAL
  values: ArrayValue[]
  loop: boolean
}

export interface EnumDatatype {
  type: DATA_TYPES.ENUM
  values: ArrayValue[]
}

export interface ProbabilityDatatype {
  type: DATA_TYPES.PROBABILITY
  values: ProbabilityValue[]
}

export interface ProbabilityValue {
  value: ArrayValue
  chance: ArrayValue
}

export interface PickDatatype {
  type: DATA_TYPES.PICK
  count: number
  values: ArrayValue[]
}

export type ArgumentObject = Record<string, unknown>

export type ArrayValue = {
  type: ARRAY_VALUE_TYPE
  value: string
}
