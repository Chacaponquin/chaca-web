import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformDefinition() {
  const code = `
dataset.transform(config: DumpConfig) => DumpFile[]
`

  return <Code code={code} language="typescript" title="Transform dataset definition" />
}
