import { Code } from "@markdown/components/Markdown/components"

export default function GenerateValueCode() {
  const code = `
import { chaca, modules } from 'chaca'

// generate simple value
const id = modules.id.uuid()

// generate a simple value with arguments
const numberLowerThan5 = modules.datatype.int({ max: 5 })
`

  return (
    <Code
      title={{ en: "Generate module value", es: "Generar los valores de un módulo" }}
      code={code}
      language="typescript"
    ></Code>
  )
}
