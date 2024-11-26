import { Code } from "@markdown/components/Markdown/components"

export default function FunctionDefinition() {
  const code = `
{
    chance({ currentFields, store }: ChanceFunctionProps): number
}
`

  return <Code code={code} language="typescript" title="Chance definition as function" />
}
