import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const GET_SCHEMA_VALUES: SectionTitle = {
  id: "get-schema-values",
  title: "Obtener valores de un schema",
}

export const GET_CURRENT_SCHEMA_VALUES: SectionTitle = {
  id: "get-current-schema-docs",
  title: "Obtener documentos del schema actual",
}

export class DatasetStore extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Dataset store", url: "dataset-store" })

    this.titles = [GET_SCHEMA_VALUES, GET_CURRENT_SCHEMA_VALUES]
  }
}
