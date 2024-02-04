import { DocSection } from "../interfaces"

export default function useDocs() {
  const DOCS: Array<DocSection> = [
    { subSections: [{ file: "test", title: "Test" }], folder: "guides", title: "Guides" },
    { folder: "api", subSections: [], title: "REST API" },
    { folder: "export", subSections: [], title: "Export" },
    { folder: "field-types", subSections: [], title: "Field types" },
    { folder: "relational-schemas", subSections: [], title: "Relational schemas" },
    { folder: "schemas", subSections: [], title: "Schemas" },
  ]

  return { DOCS }
}
