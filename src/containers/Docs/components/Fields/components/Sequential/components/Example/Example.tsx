import { Code } from "@markdown/components/Markdown/components"

export default function Example() {
  const code = `
const sizeSchema = chaca.schema({
    id: chaca.sequence(),
    name: chaca.sequential(["S", "L", "XL", "2XL", "3XL"])
})

sizeSchema.array(5)

// result
[
    { id: 1, name: "S" },
    { id: 2, name: "L" },
    { id: 3, name: "XL" },
    { id: 4, name: "2XL" },
    { id: 5, name: "3XL" },
]
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Sequential field example", es: "Ejemplo de un campo sequential" }}
    />
  )
}
