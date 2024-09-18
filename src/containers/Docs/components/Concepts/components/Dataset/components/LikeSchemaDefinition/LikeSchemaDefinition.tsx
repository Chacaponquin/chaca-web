import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function LikeSchemaDefinition() {
  const code = `
const likesSchema = chaca.schema({
    userId: chaca.key(chaca.ref("User.id")),
    productId: chaca.key(chaca.ref("Product.id")),
    createdAt: () => modules.date.past()
})
`

  return <Code code={code} language="typescript" title="Like schema definition" />
}
