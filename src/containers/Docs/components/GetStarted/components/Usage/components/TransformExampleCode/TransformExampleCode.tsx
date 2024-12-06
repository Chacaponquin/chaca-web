import { Code } from "@markdown/components/Markdown/components"

export default function TransformExampleCode() {
  const code = `
import { chaca, modules } from 'chaca'

const userSchema = chaca.schema({ ... })

const postSchema = chaca.schema({ ... })

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

// transform 50 user schema documents to json syntax
userSchema.transform(50, {
  filename: 'user',
  format: 'json'
})

// transform dataset data to postgresql syntax
dataset.transform({
  filename: 'dataset',
  format: 'postgresql'
})
`

  return <Code title="Transform blog dataset" code={code} language="typescript" />
}
