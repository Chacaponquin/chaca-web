import { Code } from "@markdown/components/Markdown/components"

export default function UniqueExample() {
  const code = `
const userSchema = chaca.schema({
    id: chaca.key(chaca.sequence())
})

const workerSchema = chaca.schema({
    id: chaca.ref("User.id", { unique: true })
})

const dataset = chaca.dataset([
    {
        name: "User",
        documents: 3,
        schema: userSchema
    },
    {
        name: "Worker",
        documents: 3,
        schema: workerSchema
    }
])

dataset.generate()

// result
{
    User: [{ id: 1 }, { id: 2 }, { id: 3 }],
    Worker: [{ id: 3 }, { id: 1 }, { id: 2 }] 
}
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Unique reference example", es: "Ejemplo de referencias únicas" }}
    />
  )
}
