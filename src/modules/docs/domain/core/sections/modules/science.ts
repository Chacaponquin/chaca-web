import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const PERIODIC_TABLE_ELEMENT: ModuleSubSectionTitle = {
  id: "periodic_table_element",
  title: "periodicTableElement",
}

export const UNIT: ModuleSubSectionTitle = { id: "unit", title: "unit" }

export class Science extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Science", es: "Science" },
      url: "science",
      apiId: "science",
      titles: [UNIT, PERIODIC_TABLE_ELEMENT],
    })
  }
}
