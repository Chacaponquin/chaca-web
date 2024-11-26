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

  return <Code code={code} language="typescript" title="Ecommerce reference example" />
}
