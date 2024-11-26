import { Code } from "@markdown/components/Markdown/components"

export default function EcommerceDatasetDefinition() {
  const code = `
const dataset = chaca.dataset([
    {
        name: "User",
        schema: userSchema,
        documents: 10
    },
    {
        name: "Product",
        schema: productSchema,
        documents: 50
    }
])
`

  return <Code code={code} language="typescript" title="Ecommerce dataset definition" />
}
