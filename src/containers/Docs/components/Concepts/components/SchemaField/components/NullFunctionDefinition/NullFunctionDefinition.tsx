import { Code } from "@markdown/components/Markdown/components"

export default function NullFunctionDefinition() {
  const code = `
{
    possibleNull: ({ currentFields, store }: PossibleNullFunctionProps) => number
}
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Null function definition", es: "Definición de valores nulos con una función" }}
    />
  )
}
