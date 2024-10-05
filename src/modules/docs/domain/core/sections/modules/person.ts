import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const FIRST_NAME: SectionTitle = { id: "first_name", title: "firstName" }

export class Person extends ModuleDocSubSection {
  readonly firstNameUrl = this.buildUrl(FIRST_NAME.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Person", url: "person", apiId: "person" })
  }
}
