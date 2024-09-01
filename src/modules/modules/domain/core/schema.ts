import { Argument } from "./argument"

export interface ModuleSection {
  name: string
  options: Module[]
  id: string
}

export interface Module {
  name: string
  arguments: Argument[]
  id: string
}
