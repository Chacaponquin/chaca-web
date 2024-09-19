import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function CurrentDefinition() {
  const code = `
store.currentDocuments<T>() => T[]
`

  return <Code code={code} language="typescript" title="Get current schema documents definiton" />
}
