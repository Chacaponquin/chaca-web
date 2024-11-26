import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const DEFINITION: SectionTitle = { id: "definition", title: "Definir un Dataset" }

export const GENERATE: SectionTitle = { id: "generate", title: "Generar datos" }

export const EXPORT_DATA: SectionTitle = { id: "export", title: "Exportar datos generados" }

export const HOW_CREATE_DATA: SectionTitle = {
  id: "how-create-data",
  title: "¿Cómo se generan los datos?",
}

export const GENERATION_SEQUENCE: SectionTitle = {
  id: "generation-sequence",
  title: "Secuencia de ejecución",
}

export const EXAMPLE: SectionTitle = { id: "example", title: "Ejemplo práctico" }

export const CYCLIC_DEPENDENCE: SectionTitle = {
  id: "cyclic-dependence",
  title: "Dependencia cíclica",
}

export const TRANSFORM_DATA: SectionTitle = {
  id: "transform",
  title: "Transformar datos generados",
}

export class Dataset extends DocSubSection {
  readonly cyclicUrl = this.buildUrl(CYCLIC_DEPENDENCE.id)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Dataset", url: "dataset" })

    this.titles = [
      DEFINITION,
      GENERATE,
      EXPORT_DATA,
      HOW_CREATE_DATA,
      GENERATION_SEQUENCE,
      EXAMPLE,
      CYCLIC_DEPENDENCE,
      TRANSFORM_DATA,
    ]
  }
}
