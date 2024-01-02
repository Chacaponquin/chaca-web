import { ARGUMENT_TYPE } from "../constants"

export interface ApiSchemaResponse {
  name: string
  options: ApiSchemaOptionResponse[]
  showName: string
}

export interface ApiSchemaOptionResponse {
  name: string
  arguments: ApiArgument[]
  showName: string
}

export interface ApiArgument {
  argument: string
  inputType: ARGUMENT_TYPE
  selectValues?: string[]
  description: string
}
