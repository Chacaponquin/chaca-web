import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.key(field: FieldToRef, config?: FieldRefInputConfig) => RefField
`

  return <Code code={code} language="typescript" title="Key field definition" />
}
