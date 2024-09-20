import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

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

  return <Code code={code} language="typescript" title="Enum array field example" />
}
