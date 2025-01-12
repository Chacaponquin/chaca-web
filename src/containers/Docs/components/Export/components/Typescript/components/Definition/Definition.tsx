import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
// simple config
schema.export({
    filename: 'data',
    location: 'folder',
    format: 'typescript'
})

// complex config
schema.export({
    filename: 'data',
    location: 'folder',
    format: {
        ext: 'typescript',
        zip: false
    }
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Typescript format definition", es: "Definición del formato typescript" }}
    />
  )
}
