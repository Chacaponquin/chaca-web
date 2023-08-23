import { Argument } from "./argument.interface"

export interface Schema {
  name: string
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
