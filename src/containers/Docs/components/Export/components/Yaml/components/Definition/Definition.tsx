import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
// simple config
schema.export({
    filename: 'data',
    location: 'folder',
    format: 'yaml'
})

// complex config
schema.export({
    filename: 'data',
    location: 'folder',
    format: {
        ext: 'yaml',
        zip: false
    }
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Yaml format definition", es: "Definición para el formato yaml" }}
    />
  )
}
