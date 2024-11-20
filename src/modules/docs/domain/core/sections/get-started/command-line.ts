import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const INSTALL: SectionTitle = { id: "instalation", title: "Instalación" }

export const RUN: SectionTitle = { id: "run", title: "Ejecutar CLI" }

export const EXPORT: SectionTitle = { id: "export", title: "Comandos" }

export const EXPORT_JSON: SectionTitle = { id: "json", title: "json" }

export const EXPORT_CSV: SectionTitle = { id: "csv", title: "csv" }

export const EXPORT_PYTHON: SectionTitle = { id: "python", title: "python" }

export const EXPORT_YAML: SectionTitle = { id: "yaml", title: "yaml" }

export const EXPORT_POSTGRES: SectionTitle = {
  id: "postgresql",
  title: "postgresql",
}

export const EXPORT_JS: SectionTitle = { id: "js", title: "js" }

export const EXPORT_JAVA: SectionTitle = { id: "java", title: "java" }

export const EXPORT_TS: SectionTitle = { id: "ts", title: "ts" }

export const EXPORT_EXAMPLE: SectionTitle = { id: "export-example", title: "Ejemplo" }

export const DEFINE_CONFIG: SectionTitle = { id: "define-config", title: "Definir configuración" }

export class CommandLineSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ title: "CLI", parent: parent, url: "cli" })

    this.titles = [
      INSTALL,
      RUN,
      EXPORT,
      EXPORT_JSON,
      EXPORT_CSV,
      EXPORT_JAVA,
      EXPORT_YAML,
      EXPORT_PYTHON,
      EXPORT_JS,
      EXPORT_TS,
      EXPORT_POSTGRES,
      DEFINE_CONFIG,
    ]
  }
}
