import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const API_ID: SectionTitle = { id: "api-id", title: "Api id" }

export const USAGE: SectionTitle = { id: "usage", title: "Uso" }

export class Overview extends DocSubSection {
  readonly apiIdUrl = this.buildUrl(API_ID.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Overview", url: "overview" })

    this.titles = [API_ID, USAGE]
  }
}
