import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PICK_SPECIFIC_COUNT: SectionTitle = {
  id: "pick-count",
  title: "Cantidad de elementos específica",
}

export const ELEMENTS_RANGE: SectionTitle = { id: "elements-range", title: "Rango de elementos" }

export const CUSTOM_COUNT: SectionTitle = {
  id: "custom-count",
  title: "Cantidad variable de elementos",
}

export class Pick extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Pick", es: "Pick" }, url: "pick" })

    this.titles = [PICK_SPECIFIC_COUNT, ELEMENTS_RANGE, CUSTOM_COUNT]
  }
}
