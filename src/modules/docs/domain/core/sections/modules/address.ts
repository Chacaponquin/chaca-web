import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const ZIP_CODE: ModuleSubSectionTitle = { id: "zip_code", title: "zipCode" }

export const TIME_ZONE: ModuleSubSectionTitle = { id: "time_zone", title: "timeZone" }

export const CARDINAL_DIRECTION: ModuleSubSectionTitle = {
  id: "cardinal_direction",
  title: "cardinalDirection",
}

export const COUNTRY: ModuleSubSectionTitle = { id: "country", title: "country" }

export const COUNTRY_CODE: ModuleSubSectionTitle = { id: "country_code", title: "countryCode" }

export const ORDINAL_DIRECTION: ModuleSubSectionTitle = {
  id: "ordinal_direction",
  title: "ordinalDirection",
}

export const LONGITUDE: ModuleSubSectionTitle = { id: "longitude", title: "longitude" }

export const LATITUDE: ModuleSubSectionTitle = { id: "latitude", title: "latitude" }

export class Address extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Address", es: "Address" },
      url: "address",
      apiId: "address",
      titles: [
        ZIP_CODE,
        TIME_ZONE,
        CARDINAL_DIRECTION,
        COUNTRY,
        COUNTRY_CODE,
        ORDINAL_DIRECTION,
        LONGITUDE,
        LATITUDE,
      ],
    })
  }
}
