import { DATA_TYPES } from "@modules/schemas/constants"
import {
  ArgumentObject,
  CustomDataType,
  EnumDataType,
  MixedDataType,
  PickDataType,
  ProbabilityDataType,
  RefDataType,
  SequenceDataType,
  SequentialDataType,
} from "../interfaces/dataset-field"

export type SaveFieldDatatype =
  | CustomDataType
  | SaveSingleValueDataType
  | RefDataType
  | SequenceDataType
  | SequentialDataType
  | EnumDataType
  | MixedDataType
  | ProbabilityDataType
  | PickDataType

export interface SaveSingleValueDataType {
  type: DATA_TYPES.SINGLE_VALUE
  schema: string
  option: string
  args: ArgumentObject
}
