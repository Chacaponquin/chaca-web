import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const FILTER_DOCUMENTS: SectionTitle = {
  id: "filter-documents",
  title: "Filtrar documentos referenciados",
}

export const REF_UNIQUE: SectionTitle = { id: "unique", title: "Referencias únicas" }

export class Ref extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Ref", url: "ref" })

    this.titles = [REF_UNIQUE, FILTER_DOCUMENTS]
  }
}
