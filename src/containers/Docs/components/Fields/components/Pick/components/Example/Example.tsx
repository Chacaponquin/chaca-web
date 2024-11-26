import { Code } from "@markdown/components/Markdown/components"

export default function Example() {
  const code = `
const schema = chaca.schema({
    sizes: chaca.pick({ values: ["S", "L", "XL", "2XL", "3XL"], count: 2 })
})

schema.array(3)

// result
[
    { sizes: ["S", "XL"] },
    { sizes: ["XL", "3XL"] },
    { sizes: ["2XL", "X"] }
]
`

  return <Code code={code} language="typescript" title="Product sizes pick definition" />
}
