import { Argument } from "./argument"

export interface Schema {
  name: string
  options: SubOption[]
  id: string
}

export interface SubOption {
  name: string
  arguments: Argument[]
  id: string
}
