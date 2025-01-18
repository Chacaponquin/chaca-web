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
      description: {
        es: "Aprende sobre la ruta /module de nuestra API REST para generar valores de los módulos definidos en Chaca",
        en: "Learn about the /module route of our REST API to generate values from modules defined in Chaca",
      },
    })

    this.titles = [PARAMS, BODY, EXAMPLE]
  }
}
