import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const ZIP_CODE: SectionTitle = { id: "zip_code", title: "zipCode" }

export const TIME_ZONE: SectionTitle = { id: "time_zone", title: "timeZone" }

export const CARDINAL_DIRECTION: SectionTitle = {
  id: "cardinal_direction",
  title: "cardinalDirection",
}

export const COUNTRY: SectionTitle = { id: "country", title: "country" }

export const COUNTRY_CODE: SectionTitle = { id: "country_code", title: "countryCode" }

export class Address extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Address", url: "address", apiId: "address" })

    this.titles = [ZIP_CODE, TIME_ZONE, CARDINAL_DIRECTION, COUNTRY, COUNTRY_CODE]
  }
}
