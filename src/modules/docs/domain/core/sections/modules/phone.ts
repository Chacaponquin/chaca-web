import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const NUMBER: SectionTitle = { id: "number", title: "number" }

export const CALL_DURATION: SectionTitle = { id: "call_duration", title: "callDuration" }

export const PREFIX: SectionTitle = { id: "prefix", title: "prefix" }

export class Phone extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Phone", url: "phone", apiId: "phone" })

    this.titles = [CALL_DURATION, NUMBER, PREFIX]
  }
}
