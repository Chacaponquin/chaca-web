import { Code } from "@markdown/components/Markdown/components"

export default function ImportCode() {
  const code = `
import { chaca, modules } from 'chaca'

// generate simple value
const id = modules.id.uuid()

// define a schema
const schema = chaca.schema({
    id: chaca.sequence()
})
`

  return <Code title="Use Chaca" code={code} language="typescript"></Code>
}
