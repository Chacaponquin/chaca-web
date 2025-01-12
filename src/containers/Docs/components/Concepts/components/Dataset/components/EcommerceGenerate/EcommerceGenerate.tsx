import { Code } from "@markdown/components/Markdown/components"

export default function EcommerceGenerate() {
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

dataset.generate()

// result
{
    User: [...],
    Product: [...]
}
`
  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Generate dataset example", es: "Generar dataset de ejemplo" }}
    />
  )
}
