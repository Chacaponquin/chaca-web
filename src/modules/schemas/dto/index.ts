import { ARGUMENT_TYPE } from "../constants"

export interface ApiSchemaResponse {
  schemas: Array<{
    name: string
    options: ApiSchemaOptionResponse[]
    showName: string
  }>
  version: string
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
