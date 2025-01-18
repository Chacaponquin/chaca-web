import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PROBABILITY_VALUE: SectionTitle = {
  id: "value",
  title: { es: "Valor de probabilidad", en: "Probability value" },
}

export const FUNCTION_VALUE: SectionTitle = {
  id: "function-value",
  title: { es: "Probabilidad a través de funciones", en: "Probability function" },
}

export class Probability extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Probability", es: "Probability" },
      url: "probability",
      description: {
        es: "Aprende a utilizar el campo probability para devolver devolver valores dependiendo su probabilidad de elección",
        en: "Learn how to use the probability field to return values depending on a choice probability",
      },
    })

    this.titles = [PROBABILITY_VALUE, FUNCTION_VALUE]
  }
}
