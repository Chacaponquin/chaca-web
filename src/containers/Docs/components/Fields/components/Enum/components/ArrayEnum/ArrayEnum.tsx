import { Code } from "@markdown/components/Markdown/components"

export default function ArrayEnum() {
  const code = `
const schema = chaca.schema({
    category: {
        type: chaca.enum(["Comedy", "Horror", "Animation", "Musical"]),
        isArray: 3
    }
})

schema.object()

// result
{
    category: ["Comedy", "Animation", "Animation"]
}
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Enum array field example", es: "Ejemplo de un campo enum como un arreglo" }}
    />
  )
}
