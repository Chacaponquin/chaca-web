import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function DatasetDefinition() {
  const code = `
const userSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    userame: () => modules.internet.username(),
    email: () => modules.internet.email()
})

const productSchema = chaca.schema({
    id: chaca.key(chaca.sequence()),
    title: () => modules.lorem.words(),
    price: () => modules.datatype.float({ min: 0.2, max: 100, precision: 2 }),
    userId: chaca.ref("User.id")
})

const dataset = chaca.dataset([
    {
        name: "User",
        schema: userSchema,
        documents: 5
    },
    {
        name: "Product",
        schema: productSchema,
        documents: 10
    }
])
`

  return <Code title="Example dataset definition" code={code} language="typescript" />
}
