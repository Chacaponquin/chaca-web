import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
import { chaca, modules } from 'chaca'

const schema = chaca.schema({
    id: () => modules.id.uuid(), // simple definition

    images: {
        type: () => modules.image.people(), // object definition
        isArray: {
            min: 2,
            max: 10
        },
        possibleNull: 0.5
    }
})
`

  return <Code code={code} language="typescript" title="schema.js" />
}
