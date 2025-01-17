import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const GET_SCHEMA_VALUES: SectionTitle = {
  id: "get-schema-values",
  title: { es: "Obtener valores de un schema", en: "Get schema values" },
}

export const GET_CURRENT_SCHEMA_VALUES: SectionTitle = {
  id: "get-current-schema-docs",
  title: { es: "Obtener documentos del schema actual", en: "Get actual schema documents" },
}

export class DatasetStore extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Dataset Store", es: "Dataset Store" },
      url: "dataset-store",
    })

    this.titles = [GET_SCHEMA_VALUES, GET_CURRENT_SCHEMA_VALUES]
  }
}
