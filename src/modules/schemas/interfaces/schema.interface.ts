import { ARGUMENT_TYPE } from "../constants/ARGUMENT_TYPE"

export interface Schema {
  parent: string
  options: SubOption[]
  id: string
}

export interface SubOption {
  id: string
  name: string
  arguments: Argument[]
  exampleValue: unknown
  description: string
  route: string
}

export interface Argument {
  argument: string
  inputType: ARGUMENT_TYPE
  selectValues?: string[]
  description: string
}
