import { Code } from "@markdown/components/Markdown/components"

export default function ExportUserSchema() {
  const code = `
await userSchema.export(3, {
    filename: 'user',
    format: 'json',
    location: 'data'
})
`

  return (
    <Code
      title={{ en: "Export user schema", es: "Exportar schema user" }}
      code={code}
      language="javascript"
    />
  )
}
