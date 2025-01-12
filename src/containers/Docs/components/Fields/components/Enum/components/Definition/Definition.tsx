import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.enum<R>(values: ReadonlyArray<R>): EnumField<R>
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Enum field definition", es: "Definición del campo enum" }}
    />
  )
}
