import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

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

  return <Code code={code} language="typescript" title="Csv format definition" />
}
