import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
// simple config
schema.export({
    filename: 'data',
    location: 'folder',
    format: 'json'
})

// complex config
schema.export({
    filename: 'data',
    location: 'folder',
    format: {
        ext: 'json',
        zip: false
    }
})
`

  return <Code code={code} language="typescript" title="Postgresql format definition" />
}
