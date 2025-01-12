import { Code } from "@markdown/components/Markdown/components"

export default function UserSchemaDefinition() {
  const code = `
const userSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    username: () => modules.internet.username(),
    image: () => modules.image.people(),
    email: () => modules.internet.email()
})    
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "User schema definition", es: "Definición del schema User" }}
    />
  )
}
