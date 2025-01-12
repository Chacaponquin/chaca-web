import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.pick<V>(props: PickFieldProps) => PickField<V>
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Pick field definition", es: "Definición del campo pick" }}
    />
  )
}
