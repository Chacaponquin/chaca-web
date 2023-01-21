import { ARGUMENT_TYPE } from "../constants"

export interface Argument {
  argument: string
  inputType: ARGUMENT_TYPE
  selectValues?: string[]
  description: string
}

export interface ArgumentsObject {
  [key: string]: unknown
}
