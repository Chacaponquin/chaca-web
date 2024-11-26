import { Code } from "@markdown/components/Markdown/components"

export default function ExportSchema() {
  const code = `
schema.export(documents, config) => Promise<string>
`

  return <Code title="Export schema definition" code={code} language="typescript" />
}
