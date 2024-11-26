import { Code } from "@markdown/components/Markdown/components"

export default function ArrayFunctionDefinition() {
  const code = `
{
    isArray: ({ currentFields, store }: IsArrayFunctionProps) => number | undefined
}
`

  return <Code code={code} language="typescript" title="Array function definition" />
}
