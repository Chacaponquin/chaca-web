import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const BETWEEN: SectionTitle = { id: "between", title: "between" }

export const BIRTHDATE: SectionTitle = { id: "birthdate", title: "birthdate" }

export const FUTURE: SectionTitle = { id: "future", title: "future" }

export const MONTH: SectionTitle = { id: "month", title: "month" }

export const PAST: SectionTitle = { id: "past", title: "past" }

export const SOON: SectionTitle = { id: "soon", title: "soon" }

export const TIME_AGO: SectionTitle = { id: "time_ago", title: "timeAgo" }

export const WEEK_DAY: SectionTitle = { id: "week_day", title: "weekDay" }

export class Date extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Date", url: "date", apiId: "date" })

    this.titles = [BETWEEN, BIRTHDATE, FUTURE, MONTH, PAST, SOON, TIME_AGO, WEEK_DAY]
  }
}
