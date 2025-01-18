import { DocSection, DocSubSection } from "../../base"

export class Enum extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Enum", es: "Enum" },
      url: "enum",
      description: {
        es: "Aprende a utilizar el campo enum dentro de schemas para definir campos que tengan valores limitados",
        en: "Learn how to use the enum field in schemas to define fields that have limited values",
      },
    })
  }
}
