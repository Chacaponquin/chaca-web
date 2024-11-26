import { Code } from "@markdown/components/Markdown/components"

export default function ExportUserSchema() {
  const code = `
await userSchema.export(3, {
    filename: 'user',
    format: 'json',
    location: 'data'
})
`

  return <Code title="Export user schema" code={code} language="javascript" />
}
