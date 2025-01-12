import { Code } from "@markdown/components/Markdown/components"

export default function DatasetDefinition() {
  const code = `
chaca.dataset(schemas: DatasetSchema[]) => Dataset
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Dataset definition", es: "Definició de un Dataset" }}
    />
  )
}
