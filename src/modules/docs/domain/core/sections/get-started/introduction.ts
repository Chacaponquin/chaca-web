import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const ABOUT: SectionTitle = {
  id: "about",
  title: { es: "Acerca de Chaca", en: "About Chaca" },
}

export const INSTALATION: SectionTitle = {
  id: "instalation",
  title: { es: "Instalación", en: "Installation" },
}

export const REQUIREMENTS: SectionTitle = {
  id: "requirements",
  title: { es: "Requisitos", en: "Requirements" },
}

export const COMMUNITY: SectionTitle = {
  id: "community",
  title: { es: "Comunidad", en: "Community" },
}

export class IntroductionSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Introduction", es: "Introducción" },
      url: "introduction",
      description: {
        es: "Aprende a como crear datos mock y exportarlos a cualquier formato de archivo con Chaca",
        en: "Learn how to create mock data and export it to any file format with Chaca",
      },
    })

    this.titles = [ABOUT, INSTALATION, REQUIREMENTS, COMMUNITY]
  }
}
