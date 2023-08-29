import { Argument } from "./argument.interface"

export interface Schema {
  name: string
  options: SubOption[]
  id: string
  showName: string
}

export interface SubOption {
  id: string
  name: string
  arguments: Argument[]
  showName: string
}
