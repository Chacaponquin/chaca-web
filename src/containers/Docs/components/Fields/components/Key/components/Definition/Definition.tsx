import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
chaca.key(field: KeyFieldProps) => KeyField
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Key field definition", es: "Definición de un campo key" }}
    />
  )
}
