export class RepeatDatasetNameError extends Error {}
export class EmptyFieldNameError extends Error {}
export class EmptyDatasetNameError extends Error {}
export class RepeatSameLevelFieldNameError extends Error {}

export class EmptyRefFieldError extends Error {}
export class EmptyEnumFieldError extends Error {
  constructor(public readonly field: string) {
    super()
  }
}
export class EmptySequentialFieldError extends Error {
  constructor(public readonly field: string) {
    super()
  }
}

export class DownloadDatasetError extends Error {}

export class EmptyArrayValueError extends Error {}
export class InvalidArrayNumberValue extends Error {}
export class InvalidArrayJSONValue extends Error {}
