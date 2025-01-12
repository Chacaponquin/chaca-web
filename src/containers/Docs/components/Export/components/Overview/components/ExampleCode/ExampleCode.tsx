import { Code } from "@markdown/components/Markdown/components"

export default function ExampleCode() {
  const code = `
const data = [
    { id: 1, name: 'Alberto', age: 20 },
    { id: 2, name: 'Carolina', age: 28 }
]

await chaca.export(data, {
    filename: "user",
    location: "data",
    format: "json"
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Export data example code", es: "Ejemplo de exportación de datos" }}
    />
  )
}
