import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
// simple config
schema.export({
    filename: 'data',
    location: 'folder',
    format: 'javascript'
})

// complex config
schema.export({
    filename: 'data',
    location: 'folder',
    format: {
        ext: 'javascript',
        zip: false
    }
})
`

  return <Code code={code} language="typescript" title="Javascript format definition" />
}
