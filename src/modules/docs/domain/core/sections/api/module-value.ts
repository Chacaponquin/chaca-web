import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PARAMS: SectionTitle = {
  id: "params",
  title: { es: "Parámetros", en: "Query params" },
}

export const BODY: SectionTitle = { id: "body", title: { en: "Body", es: "Cuerpo de la petición" } }

export const EXAMPLE: SectionTitle = { id: "example", title: { en: "Example", es: "Ejemplo" } }

export class ModuleValueSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Module Value", es: "Module Value" },
      url: "module-value",
    })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
