import { Code } from "@markdown/components/Markdown/components"

export default function ExportDefinition() {
  const code = `
dataset.export(config: FileConfig) => string[]
`

  return <Code code={code} language="typescript" title="Export dataset definition" />
}
