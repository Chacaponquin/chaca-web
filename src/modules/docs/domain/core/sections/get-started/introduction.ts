import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const ABOUT: SectionTitle = { id: "about", title: "Acerca de Chaca" }

export const INSTALATION: SectionTitle = { id: "instalation", title: "Instalación" }

export const REQUIREMENTS: SectionTitle = { id: "requirements", title: "Requisitos" }

export const COMMUNITY: SectionTitle = { id: "community", title: "Comunidad" }

export class IntroductionSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Introduction", url: "introduction" })

    this.titles = [ABOUT, INSTALATION, REQUIREMENTS, COMMUNITY]
  }
}
