import { Code } from "@markdown/components/Markdown/components"

export default function NestedSchemaExample() {
  const code = `
const schema = chaca.schema({
    id: chaca.sequence(),
    username: () => modules.internet.username(),
    socialMedia: chaca.schema({
        facebook: () => modules.internet.url(),
        x: () => modules.internet.url(),
        linkedin: () => modules.internet.url()
    })
})
`
  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Nested schema definition", es: "Definición de un schema anidado" }}
    />
  )
}
