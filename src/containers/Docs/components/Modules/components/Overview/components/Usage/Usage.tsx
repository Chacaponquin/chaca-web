import { Code } from "@markdown/components/Markdown/components"

const code = `
import { modules } from "chaca"

// generate a value
modules.animal.dog() // "Armant"
`

export default function Usage() {
  return <Code code={code} language="typescript" title="Modules usage" />
}
