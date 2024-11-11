import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const FIRST_NAME: SectionTitle = { id: "first_name", title: "firstName" }

export const LANGUAGE: SectionTitle = { id: "language", title: "language" }

export const JOB_LEVEL: SectionTitle = { id: "job_level", title: "jobLevel" }

export const JOB_AREA: SectionTitle = { id: "job_area", title: "jobArea" }

export const GENDER: SectionTitle = { id: "gender", title: "gender" }

export const SEX: SectionTitle = { id: "sex", title: "sex" }

export const LAST_NAME: SectionTitle = { id: "last_name", title: "lastName" }

export const FULL_NAME: SectionTitle = { id: "full_name", title: "fullName" }

export const PREFIX: SectionTitle = { id: "prefix", title: "prefix" }

export const ZODIAC_SIGN: SectionTitle = { id: "zodiac_sign", title: "zodiacSign" }

export class Person extends ModuleDocSubSection {
  readonly firstNameUrl = this.buildUrl(FIRST_NAME.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Person", url: "person", apiId: "person" })

    this.titles = [
      FIRST_NAME,
      LAST_NAME,
      FULL_NAME,
      PREFIX,
      SEX,
      LANGUAGE,
      JOB_LEVEL,
      JOB_AREA,
      GENDER,
      ZODIAC_SIGN,
    ]
  }
}
