import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function LimitExample() {
  const code = `
const schema = chaca.schema({
    sizes: chaca.pick({ 
        values: ["S", "L", "XL", "2XL", "3XL"], 
        count: { min: 1, max: 3 }
    })
})

schema.array(3)

// result
[
    { sizes: ["S"] },
    { sizes: ["XL", "3XL", "L"] },
    { sizes: ["2XL"] }
]
`

  return <Code code={code} language="typescript" title="Product sizes pick definition" />
}
