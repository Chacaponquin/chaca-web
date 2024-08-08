import { DocSection, DocSubSection } from "../base"

class ApiSection extends DocSection {
  constructor() {
    super({ title: "REST API", url: "rest-api" })
  }
}

export const SECTION = new ApiSection()

export class OverviewSection extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Overview", url: "overview" })
  }
}

export const OVERVIEW = new OverviewSection()

SECTION.push([OVERVIEW])
