import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function ProductSchemaDefinition() {
  const code = ` 
const productSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    name: () => modules.lorem.words(),
    content: () => modules.lorem.paragraphs(),
    userId: chaca.ref("User.id") 
})   
`

  return <Code code={code} language="typescript" title="Product schema definition" />
}
