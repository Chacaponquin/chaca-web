import { Code } from "@markdown/components/Markdown/components"

export default function FunctionDefinition() {
  const code = `
{
    count({ currentFields, store }: PickCountFunctionProps): number | PickCountLimits
}
`

  return <Code code={code} language="typescript" title="Pick count definition as function" />
}
