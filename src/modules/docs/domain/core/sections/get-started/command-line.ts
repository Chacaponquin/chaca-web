import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const INSTALL: SectionTitle = { id: "instalation", title: "Instalación" }

export const RUN: SectionTitle = { id: "run", title: "Ejecutar CLI" }

export const EXPORT: SectionTitle = { id: "export", title: "Comandos" }

export const EXPORT_JSON: SectionTitle = { id: "export-json", title: "export-json" }

export const EXPORT_CSV: SectionTitle = { id: "export-csv", title: "export-csv" }

export const EXPORT_PYTHON: SectionTitle = { id: "export-python", title: "export-py" }

export const EXPORT_YAML: SectionTitle = { id: "export-yaml", title: "export-yml" }

export const EXPORT_POSTGRES: SectionTitle = {
  id: "export-postgres",
  title: "export-postgres",
}

export const EXPORT_JS: SectionTitle = { id: "export-js", title: "export-js" }

export const EXPORT_JAVA: SectionTitle = { id: "export-java", title: "export-java" }

export const EXPORT_TS: SectionTitle = { id: "export-ts", title: "export-ts" }

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
