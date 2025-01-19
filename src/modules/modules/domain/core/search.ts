import { ModuleSection, Module } from "./schema"

export class SchemaSearcher {
  constructor(private readonly modules: ModuleSection[]) {}

  findModule(p: string, t: string): Module {
    const foundParent = this.findSection(p)
    return foundParent.modules.find((el) => el.id === t) as Module
  }

  findSection(p: string): ModuleSection {
    return this.modules.find((el) => el.id === p) as ModuleSection
  }
}
