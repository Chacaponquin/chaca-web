import { ChacaError } from "@modules/app/exceptions"

export class DatasetError extends ChacaError {}

export class RepeatDatasetNameError extends DatasetError {}
export class EmptyFieldNameError extends DatasetError {}
export class EmptyDatasetNameError extends DatasetError {}
export class RepeatSameLevelFieldNameError extends DatasetError {}

export class EmptyRefFieldError extends DatasetError {}
export class EmptyEnumFieldError extends DatasetError {
  constructor(public readonly field: string) {
    super()
  }
}
export class EmptySequentialFieldError extends DatasetError {
  constructor(public readonly field: string) {
    super()
  }
}

export class DownloadDatasetError extends DatasetError {}

export class EmptyArrayValueError extends DatasetError {}
export class InvalidArrayNumberValue extends DatasetError {}
export class InvalidArrayJSONValue extends DatasetError {}
export class EmptyValuesError extends DatasetError {}
export class InvalidChanceValueError extends DatasetError {}
export class InvalidPickCountError extends DatasetError {}
