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

export const ORDINAL_DIRECTION: SectionTitle = {
  id: "ordinal_direction",
  title: "ordinalDirection",
}

export const LONGITUDE: SectionTitle = { id: "longitude", title: "longitude" }

export const LATITUDE: SectionTitle = { id: "latitude", title: "latitude" }

export class Address extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Address", es: "Address" },
      url: "address",
      apiId: "address",
    })

    this.titles = [
      ZIP_CODE,
      TIME_ZONE,
      CARDINAL_DIRECTION,
      COUNTRY,
      COUNTRY_CODE,
      ORDINAL_DIRECTION,
      LONGITUDE,
      LATITUDE,
    ]
  }
}
