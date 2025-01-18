import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const API_ID: SectionTitle = { id: "api-id", title: { es: "Api id", en: "Api id" } }

export const USAGE: SectionTitle = { id: "usage", title: { es: "Uso", en: "Usage" } }

export class Overview extends DocSubSection {
  readonly apiIdUrl = this.buildUrl(API_ID.id)

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Overview", es: "Introducción" },
      url: "overview",
      description: {
        es: "Aprende acerca de los módulos de Chaca para generar distintos tipos de datos pertenecientes a varios contextos de negocio",
        en: "Learn about Chaca modules to generate different types of data pertaining to several business contexts",
      },
    })

    this.titles = [API_ID, USAGE]
  }
}
