import { Argument } from "./argument"

export interface ModuleSection {
  name: string
  modules: Module[]
  id: string
}

export interface Module {
  name: string
  arguments: Argument[]
  id: string
}
