import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const NUMBER: ModuleSubSectionTitle = { id: "number", title: "number" }

export const CALL_DURATION: ModuleSubSectionTitle = { id: "call_duration", title: "callDuration" }

export const PREFIX: ModuleSubSectionTitle = { id: "prefix", title: "prefix" }

export class Phone extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Phone", es: "Phone" },
      url: "phone",
      apiId: "phone",
      titles: [CALL_DURATION, NUMBER, PREFIX],
    })
  }
}
