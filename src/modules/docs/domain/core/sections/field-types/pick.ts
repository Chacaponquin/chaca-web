import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PICK_SPECIFIC_COUNT: SectionTitle = {
  id: "pick-count",
  title: { es: "Cantidad de elementos específica", en: "Specific quantity of elements" },
}

export const ELEMENTS_RANGE: SectionTitle = {
  id: "elements-range",
  title: { es: "Rango de elementos", en: "Values range" },
}

export const CUSTOM_COUNT: SectionTitle = {
  id: "custom-count",
  title: { es: "Cantidad variable de elementos", en: "Variable elements amount" },
}

export class Pick extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Pick", es: "Pick" }, url: "pick" })

    this.titles = [PICK_SPECIFIC_COUNT, ELEMENTS_RANGE, CUSTOM_COUNT]
  }
}
