import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const EXPORT_TITLE: SectionTitle = {
  id: "export",
  title: { en: "chaca.export", es: "chaca.export" },
}

export const TRANSFORM_TITLE: SectionTitle = {
  id: "transform",
  title: { en: "chaca.transform", es: "chaca.transform" },
}

export class Overview extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Overview", es: "Introducción" }, url: "overview" })

    this.titles = [EXPORT_TITLE, TRANSFORM_TITLE]
  }
}
