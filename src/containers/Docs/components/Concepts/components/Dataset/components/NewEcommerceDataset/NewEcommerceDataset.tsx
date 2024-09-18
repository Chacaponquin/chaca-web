import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function NewEcommerceDataset() {
  const code = `
const dataset = chaca.dataset([
    {
        name: "Likes",
        schema: likesSchema,
        documents: 30
    },
    {
        name: "Product",
        schema: productSchema,
        documents: 50
    },
    {
        name: "User",
        schema: userSchema,
        documents: 10
    }
])
`

  return <Code code={code} language="typescript" title="Ecommerce dataset definition" />
}
