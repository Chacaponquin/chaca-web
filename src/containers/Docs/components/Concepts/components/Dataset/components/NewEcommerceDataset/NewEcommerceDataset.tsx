import { Code } from "@markdown/components/Markdown/components"

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

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Ecommerce dataset definition", es: "Definición del dataset Ecommerce" }}
    />
  )
}
