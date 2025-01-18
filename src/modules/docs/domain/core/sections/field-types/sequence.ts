import { DocSection, DocSubSection } from "../../base"

export class Sequence extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Sequence", es: "Sequence" },
      url: "sequence",
      description: {
        es: "Aprende a utilizar el campo sequence para generar valores numéricos secuenciales en cada documento de un schema",
        en: "Learn how to use the sequence field to generate sequential numeric values in each schema document",
      },
    })
  }
}
