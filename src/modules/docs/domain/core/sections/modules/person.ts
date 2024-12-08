import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const FIRST_NAME: ModuleSubSectionTitle = { id: "first_name", title: "firstName" }

export const LANGUAGE: ModuleSubSectionTitle = { id: "language", title: "language" }

export const JOB_LEVEL: ModuleSubSectionTitle = { id: "job_level", title: "jobLevel" }

export const JOB_AREA: ModuleSubSectionTitle = { id: "job_area", title: "jobArea" }

export const GENDER: ModuleSubSectionTitle = { id: "gender", title: "gender" }

export const SEX: ModuleSubSectionTitle = { id: "sex", title: "sex" }

export const LAST_NAME: ModuleSubSectionTitle = { id: "last_name", title: "lastName" }

export const FULL_NAME: ModuleSubSectionTitle = { id: "full_name", title: "fullName" }

export const PREFIX: ModuleSubSectionTitle = { id: "prefix", title: "prefix" }

export const ZODIAC_SIGN: ModuleSubSectionTitle = { id: "zodiac_sign", title: "zodiacSign" }

export class Person extends ModuleDocSubSection {
  readonly firstNameUrl = this.buildUrl(FIRST_NAME.id)

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Person", es: "Person" },
      url: "person",
      apiId: "person",
      titles: [
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
      ],
    })
  }
}
