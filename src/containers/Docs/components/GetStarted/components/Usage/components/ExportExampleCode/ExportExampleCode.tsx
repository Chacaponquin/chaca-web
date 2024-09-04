import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function ExportExampleCode() {
  const code = `
import { chaca, modules } from 'chaca'

const userSchema = chaca.schema({...})

const postSchema = chaca.schema({...})

const dataset = chaca.dataset([
  {
      name: 'User',
      schema: userSchema,
      documents: 5
  },
  {
      name: 'Post',
      schema: postSchema,
      documents: 30
  }
])

// export 50 user schema documents on a json file
await userSchema.export(50, {
  filename: 'user',
  location: 'data/folder',
  format: 'json'
})

// export dataset data on a postgresql file
await dataset.export({
  filename: 'blog',
  location: 'data/folder',
  format: 'postgresql'
})
`

  return <Code title="Export blog dataset" code={code} language="javascript" />
}
