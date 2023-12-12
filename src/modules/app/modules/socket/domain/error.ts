import { DATASETS_ERROR_HTTP_STATUS } from "../constants"

export interface NotExistFieldError {
  code: DATASETS_ERROR_HTTP_STATUS.NOT_EXIST_FIELD
  content: {
    field: string
    refField: string
  }
}

export interface TryRefNotKeyField {
  code: DATASETS_ERROR_HTTP_STATUS.REF_NOT_KEY
  content: {
    field: string
  }
}

export interface CycleDataError {
  code: DATASETS_ERROR_HTTP_STATUS.CYCLIC
  content: { message: string }
}

export interface EmptySequentialError {
  code: DATASETS_ERROR_HTTP_STATUS.EMPTY_SEQUENTIAL
  content: { field: string }
}

export interface NotEnoughValuesForRefError {
  code: DATASETS_ERROR_HTTP_STATUS.NOT_ENOUGH_VALUES_REF
  content: { refField: string; keyField: string }
}

export interface DefaultCreationError {
  code: DATASETS_ERROR_HTTP_STATUS.DEFAULT
  content: string
}

export type DatasetCreationError =
  | NotExistFieldError
  | TryRefNotKeyField
  | CycleDataError
  | EmptySequentialError
  | NotEnoughValuesForRefError
  | DefaultCreationError
