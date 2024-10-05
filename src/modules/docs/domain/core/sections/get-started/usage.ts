import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const SCHEMA_DATA: SectionTitle = { id: "schema-data", title: "Generar datos de un schema" }

export const RELATIONAL_DATA: SectionTitle = {
  id: "relational-data",
  title: "Generar datos relacionales",
}

export const MODULE_DATA: SectionTitle = {
  id: "module-value",
  title: "Generar valores de un módulo",
}

export const EXPORT_DATA: SectionTitle = { id: "export-data", title: "Exportar datos" }

export class UsageSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Usage", url: "usage" })
  }
}
