import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const BICYCLE: ModuleSubSectionTitle = { id: "bicycle", title: "bicycle" }

export const FUEL: ModuleSubSectionTitle = { id: "fuel", title: "fuel" }

export const MANUFACTURER: ModuleSubSectionTitle = { id: "manufacturer", title: "manufacturer" }

export const MODEL: ModuleSubSectionTitle = { id: "model", title: "model" }

export const TYPE: ModuleSubSectionTitle = { id: "type", title: "type" }

export const VEHICLE: ModuleSubSectionTitle = { id: "vehicle", title: "vehicle" }

export class Vehicle extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Vehicle", es: "Vehicle" },
      url: "vehicle",
      apiId: "vehicle",
      titles: [MODEL, TYPE, VEHICLE, MANUFACTURER, BICYCLE, FUEL],
    })
  }
}
