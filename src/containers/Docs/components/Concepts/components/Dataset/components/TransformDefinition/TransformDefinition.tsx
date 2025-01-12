import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformDefinition() {
  const code = `
dataset.transform(config: DumpConfig) => DumpFile[]
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Dataset transform method definition", es: "Definición del método transform" }}
    />
  )
}
