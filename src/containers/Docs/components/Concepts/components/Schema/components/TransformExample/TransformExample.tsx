import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformExample() {
  const code = `
userSchema.transform(3, {
    filename: 'user',
    format: 'json',
})

//[
//  {
//    filename: 'user.json',
//    content: '...'
//  }
//]
`

  return (
    <Code
      title={{ en: "Transform schema example", es: "Ejemplo de transformación de un schema" }}
      code={code}
      language="typescript"
    />
  )
}
