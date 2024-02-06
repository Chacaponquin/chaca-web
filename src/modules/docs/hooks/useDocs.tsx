import { useCallback, useMemo } from "react"
import { DocSection, SubSectionInf } from "../domain"

export default function useDocs() {
  const DOCS: Array<DocSection> = useMemo(() => {
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
          { file: "csv", title: "CSV" },
          { file: "java", title: "Java" },
          { file: "javascript", title: "Javascript" },
          { file: "json", title: "JSON" },
          { file: "overview", title: "Overview" },
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
          { file: "milti-generate", title: "Multi Generate" },
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

  const getAllDocs = useCallback(() => {
    let all: Array<SubSectionInf> = []

    for (const doc of DOCS) {
      all = [...all, ...doc.allSubSections]
    }

    return all
  }, [DOCS])

  return { DOCS, getAllDocs }
}
