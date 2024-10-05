import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const PERIODIC_TABLE_ELEMENT: SectionTitle = {
  id: "periodic_table_element",
  title: "periodicTableElement",
}

export const UNIT: SectionTitle = { id: "unit", title: "unit" }

export class Science extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Science", url: "science", apiId: "science" })

    this.titles = [UNIT, PERIODIC_TABLE_ELEMENT]
  }
}
