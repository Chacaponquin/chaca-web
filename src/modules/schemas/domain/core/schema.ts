import { Argument } from "./argument"

export interface Schema {
  name: string
  options: SchemaOption[]
  id: string
}

export interface SchemaOption {
  name: string
  arguments: Argument[]
  id: string
}
