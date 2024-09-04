import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function ExportSchema() {
  const code = `
schema.export(countDocuments: number, fileConfig: FileConfig) => Promise<string>
`

  return <Code title="Export schema definition" code={code} language="typescript" />
}
