import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.sequential<K>(values: K[], config?: SequentialFieldConfig) => SequentialField<K>
`

  return <Code code={code} language="typescript" title="Sequential field definition" />
}
