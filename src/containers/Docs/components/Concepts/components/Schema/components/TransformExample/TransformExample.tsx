import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function TransformExample() {
  const code = `
userSchema.transform(3, {
    filename: 'user',
    format: 'json',
})

//[
//  {
//    filename: 'user.json',
//    content: '...'
//  }
//]
`

  return <Code title="Transform schema example" code={code} language="typescript" />
}
