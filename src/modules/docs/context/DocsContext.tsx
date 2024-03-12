import { createContext, useMemo } from "react"
import { DocSection } from "../domain"

interface Props {
  docs: Array<DocSection>
}

export const DocsContext = createContext<Props>({ docs: [] as Array<DocSection> })

export function DocsProvider({ children }: { children: React.ReactNode }) {
  const docs: Array<DocSection> = useMemo(() => {
    return [
      new DocSection({
        folder: "guides",
        subSections: [
          { file: "getting-started", title: "Getting started" },
          { file: "command-line", title: "Command Line" },
          { file: "usage", title: "Usage" },
        ],
        title: "Guides",
      }),
      new DocSection({
        folder: "api",
        subSections: [
          { file: "overview", title: "Overview" },
          { file: "schema-option", title: "Schema option" },
          { file: "schema", title: "Schema" },
        ],
        title: "REST API",
      }),
      new DocSection({
        folder: "export",
        subSections: [
          { file: "overview", title: "Overview" },
          { file: "csv", title: "CSV" },
          { file: "java", title: "Java" },
          { file: "javascript", title: "Javascript" },
          { file: "json", title: "JSON" },
          { file: "postgresql", title: "Postgresql" },
          { file: "python", title: "Python" },
          { file: "typescript", title: "Typescript" },
          { file: "yaml", title: "Yaml" },
        ],
        title: "Export",
      }),
      new DocSection({
        folder: "field-types",
        subSections: [
          { file: "custom-schema-fields", title: "Custom schema fields" },
          { file: "custom", title: "Custom" },
          { file: "enum", title: "Enum" },
          { file: "field-config", title: "Field config" },
          { file: "key", title: "Key" },
          { file: "nested-schema", title: "Nested schema" },
          { file: "ref", title: "Ref" },
          { file: "sequence", title: "Sequence" },
          { file: "sequential", title: "Sequential" },
        ],
        title: "Field types",
      }),
      new DocSection({
        folder: "relational-schemas",
        subSections: [
          { file: "dataset-store", title: "Dataset Store" },
          { file: "multi-generate", title: "Multi Generate" },
        ],
        title: "Relational schemas",
      }),
      new DocSection({
        folder: "schemas",
        subSections: [
          { file: "address", title: "Address" },
          { file: "animal", title: "Animal" },
          { file: "color", title: "Color" },
          { file: "data_type", title: "Datatype" },
          { file: "date", title: "Date" },
          { file: "finance", title: "Finance" },
          { file: "id", title: "Id" },
          { file: "image", title: "Image" },
          { file: "internet", title: "Internet" },
          { file: "lorem", title: "Lorem" },
          { file: "person", title: "Person" },
          { file: "phone", title: "Phone" },
          { file: "science", title: "Science" },
          { file: "system", title: "System" },
          { file: "vehicle", title: "Vehicle" },
          { file: "video", title: "Video" },
          { file: "word", title: "Word" },
        ],
        title: "Schemas",
      }),
    ]
  }, [])

  const value = { docs: docs }

  return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>
}
