import { Code } from "@markdown/components/Markdown/components"

export default function TransformDefinition() {
  const code = `
chaca.transform(data: any, config: DumpConfig) => Promise<DumpFile[]>
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Transform definition", es: "Definición del método transform" }}
    />
  )
}
