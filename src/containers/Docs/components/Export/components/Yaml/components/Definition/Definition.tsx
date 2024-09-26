import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

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

  return <Code code={code} language="typescript" title="Yaml format definition" />
}
