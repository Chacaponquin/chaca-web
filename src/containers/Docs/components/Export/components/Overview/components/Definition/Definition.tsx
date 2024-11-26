import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.export(data: any, config: FileConfig) => Promise<string[]>
`

  return <Code code={code} language="typescript" title="Export definition" />
}
