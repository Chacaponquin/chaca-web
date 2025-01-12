import { Code } from "@markdown/components/Markdown/components"

export default function TransformExample() {
  const code = `
const data = [
    { id: 1, name: 'Alberto', age: 20 },
    { id: 2, name: 'Carolina', age: 28 }
]

chaca.transform(data, {
    filename: "user",
    location: "data",
    format: "json"
})

//[
//    { filename: "user.json", content: "..." }
//]
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Transform data example", es: "Ejemplo de transformación de datos" }}
    />
  )
}
