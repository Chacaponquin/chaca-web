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
    super({
      parent: parent,
      title: { en: "Overview", es: "Introducción" },
      url: "overview",
      description: {
        es: "Aprende a exportar y transformar datos a diferentes formatos de archivo (json, csv, yaml, sql, python, typescript, javascript) utilizando Chaca",
        en: "Learn how to export and transform data to different file formats (json, csv, yaml, sql, python, typescript, javascript) using Chaca",
      },
    })

    this.titles = [EXPORT_TITLE, TRANSFORM_TITLE]
  }
}
