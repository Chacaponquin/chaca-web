import { ArgumentConfig } from "../domain/argument"

export interface SchemaResponse {
  schemas: Array<{
    name: string
    options: SchemaOptionResponse[]
    id: string
  }>
  version: string
}

export interface SchemaOptionResponse {
  name: string
  arguments: ArgumentResponse[]
  id: string
}

export interface ArgumentResponse {
  argument: string
  config: ArgumentConfig
  showName: string
}
