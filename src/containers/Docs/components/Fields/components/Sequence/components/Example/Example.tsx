import { Code } from "@markdown/components/Markdown/components"

export default function Example() {
  const code = `
// default config
const schema = chaca.schema({
    id: chaca.sequence()
})

schema.array(5)

// result
[
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
]

// complex config
const schema = chaca.schema({
    id: chaca.sequence({ startsWith: 5, step: 3 })
})

schema.array(5)

// result
[
    { id: 5 },
    { id: 8 },
    { id: 11 },
    { id: 14 },
    { id: 17 }
]
`

  return <Code code={code} language="typescript" title="Sequence field example" />
}
