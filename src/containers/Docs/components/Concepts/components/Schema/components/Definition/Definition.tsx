import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.schema<T>(input: SchemaInput) => Schema<T>
`

  return <Code title="Schema definition" code={code} language="typescript" />
}
