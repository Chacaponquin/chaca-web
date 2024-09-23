import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function ExampleCode() {
  const code = `
const data = [
    { id: 1, name: 'Alberto', age: 20 },
    { id: 2, name: 'Carolina', age: 28 }
]

await chaca.export(data, {
    filename: "user",
    location: "data",
    format: "json" // ('java' | 'csv' | 'typescript' | 'json' | 'javascript' | 'yaml' | 'postgresql' | 'python')
})
`

  return <Code code={code} language="typescript" title="Export data code" />
}
