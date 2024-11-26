import { Code } from "@markdown/components/Markdown/components"

export default function ExportSchema() {
  const code = `
schema.export(count: number, config: FileConfig) => Promise<string[]>
`

  return <Code title="Export schema definition" code={code} language="typescript" />
}
