import { DocSection } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export class Vehicle extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Vehicle", url: "vehicle", apiId: "vehicle" })
  }
}
