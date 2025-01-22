import { ModuleArgumentResponse } from "./module-argument"

export interface ModuleResponse {
  name: string
  arguments: ModuleArgumentResponse[]
  id: string
}
