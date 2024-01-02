import { ARGUMENT_TYPE } from "../constants"

export interface Argument {
  id: string
  argument: string
  inputType: ARGUMENT_TYPE
  selectValues?: string[]
  description: string
}

export type ArgumentsObject = Record<string, unknown>
