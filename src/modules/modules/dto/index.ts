import { ArgumentConfig } from "../domain/core/argument"

export interface ModuleSectionResponse {
  modules: Array<{
    name: string
    options: ModuleResponse[]
    id: string
  }>
  version: string
}

export interface ModuleResponse {
  name: string
  arguments: ArgumentResponse[]
  id: string
}

export interface ArgumentResponse {
  argument: string
  config: ArgumentConfig
  showName: string
}
