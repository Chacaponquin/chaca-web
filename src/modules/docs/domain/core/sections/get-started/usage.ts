import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const SCHEMA_DATA: SectionTitle = {
  id: "schema-data",
  title: { es: "Generar datos de un schema", en: "Generate schema data" },
}

export const RELATIONAL_DATA: SectionTitle = {
  id: "relational-data",
  title: { es: "Generar datos relacionales", en: "Generate relational data" },
}

export const MODULE_DATA: SectionTitle = {
  id: "module-value",
  title: { es: "Generar valores de un módulo", en: "Generate module values" },
}

export const EXPORT_DATA: SectionTitle = {
  id: "export-data",
  title: { es: "Exportar datos", en: "Export data" },
}

export const TRANSFORM_DATA: SectionTitle = {
  id: "transform-data",
  title: { es: "Transformar datos", en: "Transform data" },
}

export class UsageSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Usage", es: "Uso" },
      url: "usage",
      description: {
        es: "Aprende a crear y exportar grandes cantidades de datos mock relacionales con el SDK de Chaca para Nodejs",
        en: "Learn how to create and export large amounts of relational mock data with the Nodejs Chaca SDK",
      },
    })

    this.titles = [MODULE_DATA, EXPORT_DATA, RELATIONAL_DATA, SCHEMA_DATA, TRANSFORM_DATA]
  }
}
