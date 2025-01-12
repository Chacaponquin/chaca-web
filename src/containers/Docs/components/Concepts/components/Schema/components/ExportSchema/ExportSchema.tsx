import { Code } from "@markdown/components/Markdown/components"

export default function ExportSchema() {
  const code = `
schema.export(count: number, config: FileConfig) => Promise<string[]>
`

  return (
    <Code
      title={{ en: "Export schema method definition", es: "Definición del método export" }}
      code={code}
      language="typescript"
    />
  )
}
