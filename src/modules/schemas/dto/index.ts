import { ArgumentConfig } from "../interfaces/argument"

export interface SchemaResponse {
  schemas: Array<{
    name: string
    options: SchemaOptionResponse[]
    showName: string
  }>
  version: string
}

export interface SchemaOptionResponse {
  name: string
  arguments: ArgumentResponse[]
  showName: string
}

export interface ArgumentResponse {
  argument: string
  config: ArgumentConfig
}
