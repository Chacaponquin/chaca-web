import { ModuleResponse } from "./module"

export interface ModuleSectionResponse {
  modules: Array<{
    name: string
    options: ModuleResponse[]
    id: string
  }>
  version: string
}
