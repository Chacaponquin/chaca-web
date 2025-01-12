import { Code } from "@markdown/components/Markdown/components"

export default function FunctionDefinition() {
  const code = `
{
    count({ currentFields, store }: PickCountFunctionProps): number | PickCountLimits
}
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{
        en: "Pick count definition as function",
        es: "Definición de la cantidad de elementos como función",
      }}
    />
  )
}
