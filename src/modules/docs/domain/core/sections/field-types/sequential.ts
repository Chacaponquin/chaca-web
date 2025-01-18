import { DocSection, DocSubSection } from "../../base"

export class Sequential extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Sequential", es: "Sequential" },
      url: "sequential",
      description: {
        es: "Aprende a utilizar el campo sequential para asignar una serie de valores de forma secuencial a cada documento",
        en: "Learn how to use the sequential field to assign a series of values sequentially to each document",
      },
    })
  }
}
