import { DocSection, DocSubSection } from "../../base"

export class Custom extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Custom", es: "Custom" },
      url: "custom",
      description: {
        es: "Aprende como usar el campo custom para generar valores dentro de schemas",
        en: "Learn how to use the custom field to generate values in schemas",
      },
    })
  }
}
