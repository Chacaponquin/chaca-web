import { DocSection, DocSubSection } from "../../base"

export class Key extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Key", es: "Key" },
      url: "key",
      description: {
        es: "Aprende a utilizar el campo key para definir campos que puedan ser referenciados por otros campos desde schemas externos",
        en: "Learn how to use the key field to define fields that can be referenced by other fields from external schemas",
      },
    })
  }
}
