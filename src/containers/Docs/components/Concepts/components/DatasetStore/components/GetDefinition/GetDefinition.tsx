import { Code } from "@markdown/components/Markdown/components"

export default function GetDefinition() {
  const code = `
store.get<T>(route: string, config?: GetStoreValueInput) => T[]
`

  return <Code code={code} language="typescript" title="Get values definition" />
}
