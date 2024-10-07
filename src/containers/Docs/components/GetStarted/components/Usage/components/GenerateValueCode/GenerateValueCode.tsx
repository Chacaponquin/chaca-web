import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function GenerateValueCode() {
  const code = `
import { chaca, modules } from 'chaca'

// generate simple value
const id = modules.id.uuid()

// generate a simple value with arguments
const numberLowerThan5 = modules.datatype.int({ max: 5 })
`

  return <Code title="Generate module value" code={code} language="typescript"></Code>
}
