import { Code } from "@markdown/components/Markdown/components"

export default function ValueExample() {
  const code = `
const schema = chaca.schema({
    field: chaca.probability([
        { value: 1, chance: 0.7 },
        { value: 2, chance: 0.1 },
        { value: 3, chance: 0.3 }
    ])
})

schema.array(3)

// result
[
    { field: 1 },
    { field: 1 },
    { field: 3 }
]
`

  return <Code code={code} language="typescript" title="Probability as float value example" />
}
