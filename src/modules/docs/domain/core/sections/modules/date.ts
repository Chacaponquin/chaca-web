import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const BETWEEN: ModuleSubSectionTitle = { id: "between", title: "between" }

export const BIRTHDATE: ModuleSubSectionTitle = { id: "birthdate", title: "birthdate" }

export const FUTURE: ModuleSubSectionTitle = { id: "future", title: "future" }

export const MONTH: ModuleSubSectionTitle = { id: "month", title: "month" }

export const PAST: ModuleSubSectionTitle = { id: "past", title: "past" }

export const SOON: ModuleSubSectionTitle = { id: "soon", title: "soon" }

export const TIME_AGO: ModuleSubSectionTitle = { id: "time_ago", title: "timeAgo" }

export const WEEK_DAY: ModuleSubSectionTitle = { id: "weekday", title: "weekDay" }

export const ANYTIME: ModuleSubSectionTitle = { id: "anytime", title: "anytime" }

export class Date extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Date", es: "Date" },
      url: "date",
      apiId: "date",
      titles: [BETWEEN, BIRTHDATE, FUTURE, MONTH, PAST, SOON, TIME_AGO, WEEK_DAY, ANYTIME],
    })
  }
}
