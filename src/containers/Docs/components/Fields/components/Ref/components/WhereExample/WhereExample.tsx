import { Code } from "@markdown/components/Markdown/components"

export default function WhereExample() {
  const code = `
const shopSchema = chaca.schema({
    userId: chaca.ref("User.id")
    productId: chaca.ref("Product.id", ({ refFields }) => {
        return refFields.stock > 0
    })
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{
        en: "Ecommerce dataset reference example",
        es: "Ejemplo de referencia en el dataset Ecommerce",
      }}
    />
  )
}
