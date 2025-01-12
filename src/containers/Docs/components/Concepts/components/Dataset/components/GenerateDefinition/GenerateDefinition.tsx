import { Code } from "@markdown/components/Markdown/components"

export default function GenerateDefinition() {
  const code = `
dataset.generate() => any
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Generate dataset definition", es: "Definición del método generate" }}
    />
  )
}
