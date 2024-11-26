import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformDefinition() {
  const code = `
schema.transform(count: number, config: DumpConfig) => DumpFile[]
`

  return <Code title="Transform schema definition" code={code} language="typescript" />
}
