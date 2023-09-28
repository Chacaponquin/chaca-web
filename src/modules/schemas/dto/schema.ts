import { Argument } from "../interfaces/argument.interface"

export interface ApiSchemaResponse {
  name: string
  options: ApiSchemaOptionResponse[]
  showName: string
}

export interface ApiSchemaOptionResponse {
  name: string
  arguments: Argument[]
  showName: string
}
