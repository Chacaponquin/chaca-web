import { Code } from "@markdown/components/Markdown/components"

export default function Definition() {
  const code = `
// simple config
schema.export({
    filename: 'data',
    location: 'folder',
    format: 'python'
})

// complex config
schema.export({
    filename: 'data',
    location: 'folder',
    format: {
        ext: 'python',
        zip: false
    }
})
`

  return <Code code={code} language="typescript" title="Python format definition" />
}
