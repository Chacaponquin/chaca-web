import { Module } from "./module"

export interface ModuleSection {
  name: string
  modules: Module[]
  id: string
}
