import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.schema<T>(input: SchemaInput) => Schema<T>
`

  return (
    <Code
      title={{ en: "Schema definition", es: "Definición de un schema" }}
      code={code}
      language="typescript"
    />
  )
}
