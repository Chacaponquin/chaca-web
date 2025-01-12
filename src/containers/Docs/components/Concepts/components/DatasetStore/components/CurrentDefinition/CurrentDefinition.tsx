import { Code } from "@markdown/components/Markdown/components"

export default function CurrentDefinition() {
  const code = `
store.currentDocuments<T>() => T[]
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{
        en: "currentDocuments method definiton",
        es: "Definición del método currentDocuments",
      }}
    />
  )
}
