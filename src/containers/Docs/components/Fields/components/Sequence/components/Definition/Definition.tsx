import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.sequence(config?: SequenceFieldProps) => SequenceField
`

  return <Code code={code} language="typescript" title="Sequence field definition" />
}
