import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PROBABILITY_VALUE: SectionTitle = { id: "value", title: "Valor de probabilidad" }

export const FUNCTION_VALUE: SectionTitle = { id: "function-value", title: "Probabilidad variable" }

export class Probability extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Probability", es: "Probability" }, url: "probability" })

    this.titles = [PROBABILITY_VALUE, FUNCTION_VALUE]
  }
}
