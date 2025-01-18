import { DocSection, DocSubSection } from "../../base"

interface Props {
  parent: DocSection
  title: string
  url: string
}

export class ExportSubSection extends DocSubSection {
  constructor({ parent, title, url }: Props) {
    super({
      url: url,
      title: { en: title, es: title },
      parent: parent,
      description: {
        es: `Aprende acerca de cómo exportar datos generados en Chaca a formato ${title} y sus posibles configuraciones`,
        en: `Learn how to export data generated in Chaca to ${title} format and its possible configurations`,
      },
    })
  }
}
