import { Code } from "@markdown/components/Markdown/components"

export default function IntegerNullExample() {
  const code = `
const schema = chaca.schema({
    username: {
        type: () => modules.internet.username(),
        possibleNull: 2,
    }
})

schema.array(3)

// result
[
    { username: null },
    { username: "Andres_21" },
    { username: null }
 ]
`

  return <Code code={code} language="typescript" title="Integer possible null" />
}
