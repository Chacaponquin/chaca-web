import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const FILTER_DOCUMENTS: SectionTitle = {
  id: "filter-documents",
  title: { es: "Filtrar documentos referenciados", en: "Filter referenced documents" },
}

export const REF_UNIQUE: SectionTitle = {
  id: "unique",
  title: { es: "Referencias únicas", en: "Unique references" },
}

export const OWN_REF: SectionTitle = {
  id: "own-refs",
  title: { es: "Referencias propias", en: "Own references" },
}

export class Ref extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Ref", es: "Ref" }, url: "ref" })

    this.titles = [REF_UNIQUE, FILTER_DOCUMENTS, OWN_REF]
  }
}
