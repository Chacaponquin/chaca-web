import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function GenerateValueCode() {
  const code = `
import { chaca, modules } from 'chaca'

// generate simple value
const id = modules.id.uuid().value()

// generate a simple value with arguments
const numberLowerThan5 = modules.datatype.int().value({ max: 5 })
`

  return <Code code={code} className="my-5" language="typescript"></Code>
}
