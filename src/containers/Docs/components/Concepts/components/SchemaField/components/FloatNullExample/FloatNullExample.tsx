import { Code } from "@markdown/components/Markdown/components"

export default function FloatNullExample() {
  const code = `
const schema = chaca.schema({
    username: {
        type: () => modules.internet.username(),
        possibleNull: 0.7
    }
})

schema.array(5)

// result
[
    { username: null },
    { username: "Andres_22" },
    { username: null },
    { username: null },
    { username: null }
]
`
  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Probability null definition", es: "Definición de un valor de probabilidad" }}
    />
  )
}
