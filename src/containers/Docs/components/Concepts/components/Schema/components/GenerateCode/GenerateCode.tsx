import { Code } from "@markdown/components/Markdown/components"

export default function GenerateCode() {
  const code = `
// generate a schema object
schema.object()

// generate 10 schema documents
schema.array(10)
  `

  return <Code title="Schema generation" language="javascript" code={code} />
}
