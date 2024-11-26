import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
// simple config
schema.export({
    filename: 'data',
    location: 'folder',
    format: 'java'
})

// complex config
schema.export({
    filename: 'data',
    location: 'folder',
    format: {
        ext: 'java',
        zip: false
    }
})
`

  return <Code code={code} language="typescript" title="Java format definition" />
}
