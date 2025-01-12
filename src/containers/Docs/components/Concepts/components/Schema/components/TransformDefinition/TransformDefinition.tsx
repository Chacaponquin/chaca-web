import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformDefinition() {
  const code = `
schema.transform(count: number, config: DumpConfig) => DumpFile[]
`

  return (
    <Code
      title={{ en: "Schema transform method definition", es: "Definición del método transform" }}
      code={code}
      language="typescript"
    />
  )
}
