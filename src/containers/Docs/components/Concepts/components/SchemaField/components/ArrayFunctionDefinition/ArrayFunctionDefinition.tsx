import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function ArrayFunctionDefinition() {
  const code = `
{
    isArray: ({ currentFields, store }: IsArrayFunctionProps) => number
}
`

  return <Code code={code} language="typescript" title="Array function definition" />
}
