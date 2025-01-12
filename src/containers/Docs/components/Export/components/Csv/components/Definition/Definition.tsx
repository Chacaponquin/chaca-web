import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
// simple config
schema.export({
    filename: 'data',
    location: 'folder',
    format: 'csv'
})

// complex config
schema.export({
    filename: 'data',
    location: 'folder',
    format: {
        ext: 'csv',
        zip: false
    }
})
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Csv format definition", es: "Definición del formato csv" }}
    />
  )
}
