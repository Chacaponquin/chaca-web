import { Code } from "@markdown/components/Markdown/components"

export default function RefExample() {
  const code = `
const userSchema = chaca.schema({
    id: chaca.key(chaca.sequence())
})

const productSchema({
    id: chaca.key(chaca.sequence()),
    userId: chaca.ref("User.id")
})

const dataset = chaca.dataset([
    {
        name: "User",
        schema: userSchema,
        documents: 3
    },
    {
        name: "Product",
        schema: productSchema,
        documents: 5
    }
])

dataset.generate()

// result
{
    User: [{ id: 1 }, { id: 2 }, { id: 3 }],
    Product: [
        { id: 1, userId: 2 },
        { id: 2, userId: 3 },
        { id: 3, userId: 1 },
        { id: 4, userId: 1 },
        { id: 5, userId: 2 }
    ]
}
`

  return <Code code={code} language="typescript" title="User-Product relation example" />
}
