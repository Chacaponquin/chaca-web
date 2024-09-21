import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function UserWhereExample() {
  const code = `
const shopSchema = chaca.schema({
    userId: chaca.ref("User.id")
    productId: chaca.ref("Product.id", ({ refFields, currentFields }) => {
        return refFields.stock > 0 && currentFields.userId !== refFields.userId
    })
})
`

  return <Code code={code} language="typescript" title="Ecommerce reference example" />
}
