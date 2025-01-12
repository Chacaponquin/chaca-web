import { Code } from "@markdown/components/Markdown/components"

interface Props {
  extension: string
}

export default function DatasetDefinition({ extension }: Props) {
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

await dataset.export({
    filename: "user",
    location: "data",
    format: "${extension}"
})
`

  return (
    <Code
      title={{ en: "Example dataset definition", es: "Ejemplo de la definición de un dataset" }}
      code={code}
      language="typescript"
    />
  )
}
