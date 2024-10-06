import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const BICYCLE: SectionTitle = { id: "bicycle", title: "bicycle" }

export const FUEL: SectionTitle = { id: "fuel", title: "fuel" }

export const MANUFACTURER: SectionTitle = { id: "manufacturer", title: "manufacturer" }

export const MODEL: SectionTitle = { id: "model", title: "model" }

export const TYPE: SectionTitle = { id: "type", title: "type" }

export const VEHICLE: SectionTitle = { id: "vehicle", title: "vehicle" }

export class Vehicle extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Vehicle", url: "vehicle", apiId: "vehicle" })

    this.titles = [MODEL, TYPE, VEHICLE, MANUFACTURER, BICYCLE, FUEL]
  }
}
