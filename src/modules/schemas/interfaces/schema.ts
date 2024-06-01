import { Argument } from "./argument"

export interface Schema {
  name: string
  options: SubOption[]
  showName: string
}

export interface SubOption {
  name: string
  arguments: Argument[]
  showName: string
}
