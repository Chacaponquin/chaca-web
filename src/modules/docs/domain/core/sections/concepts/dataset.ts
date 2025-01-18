import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const DEFINITION: SectionTitle = {
  id: "definition",
  title: { es: "Definir un dataset", en: "Define a dataset" },
}

export const GENERATE: SectionTitle = {
  id: "generate",
  title: { es: "Generar datos", en: "Generate dataset data" },
}

export const EXPORT_DATA: SectionTitle = {
  id: "export",
  title: { es: "Exportar datos  generados", en: "Export dataset data" },
}

export const HOW_CREATE_DATA: SectionTitle = {
  id: "how-create-data",
  title: { es: "¿Cómo se generan los datos?", en: "How is data generated?" },
}

export const GENERATION_SEQUENCE: SectionTitle = {
  id: "generation-sequence",
  title: { es: "Secuencia de ejecución", en: "Execution sequence" },
}

export const EXAMPLE: SectionTitle = { id: "example", title: { es: "Ejemplo", en: "Example" } }

export const CYCLIC_DEPENDENCE: SectionTitle = {
  id: "cyclic-dependence",
  title: { es: "Dependencia cíclica", en: "Cyclic dependence" },
}

export const TRANSFORM_DATA: SectionTitle = {
  id: "transform",
  title: { es: "Transformar datos", en: "Transform data" },
}

export class Dataset extends DocSubSection {
  readonly cyclicUrl = this.buildUrl(CYCLIC_DEPENDENCE.id)

  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Dataset", es: "Dataset" },
      url: "dataset",
      description: {
        es: "Aprende sobre cómo funcionan los datasets en Chaca para relacionar varios schemas y obtener datos más realistas",
        en: "Learn how datasets work in Chaca to relate multiple schemas and generate more realistic data",
      },
    })

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
